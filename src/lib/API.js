import 'whatwg-fetch';
import { NotFoundError, UnauthorizedError } from './Errors';

const WS_ROOT = 'http://localhost:3001';

const buildHeaders = () => {
  const headers = { 'Content-Type': 'application/json' };
  const token = sessionStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const buildFetchOptions = (method, headers, content) => {
  let fetchOptions = { method, headers };
  if (content) {
    fetchOptions.body = JSON.stringify(content);
  }
  return fetchOptions;
};

const throwForKnownErrors = (resp) => {
  if (resp.status === 401) {
    throw new UnauthorizedError();
  } else if (resp.status === 404) {
    throw new NotFoundError();
  }
};

const getData = async (resp) => {
  const json = await resp.text();
  return json ? JSON.parse(json) : undefined;
};

const buildErrors = (resp, data) => {
  if (!resp.ok && data) {
    return Object.keys(data).reduce((acc, k) => {
      // noinspection JSUnresolvedVariable
      acc[k] = data[k].messages[0]; // only takes the first on purpose
      return acc;
    }, {});
  }
  return undefined;
};

const call = async (method, path, content) => {
  const headers = buildHeaders();
  const fetchOptions = buildFetchOptions(method, headers, content);
  // noinspection JSCheckFunctionSignatures
  const resp = await fetch(`${WS_ROOT}${path}`, fetchOptions);
  throwForKnownErrors(resp);
  const data = await getData(resp);
  const errors = buildErrors(resp, data);
  return { data, errors };
};

const API = {

  async isAuthenticated() {
    try {
      const token = sessionStorage.getItem('token');
      if (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  /**
   * Registers a user
   * @param doc, requires email and password keys
   * @returns {Promise<*>}
   */
  async register(doc) {
    return await call('POST', '/user', doc);
  },

  /**
   * Confirms a user
   * @param doc, requires, email and confirmationCode keys
   * @returns {Promise<*>}
   */
  async confirm(doc) {
    return await call('POST', '/user/confirm', doc);
  },

  /**
   * Authenticates a user
   * @param doc, requires email and password keys
   * @returns {Promise<*>}
   */
  async signin(doc) {
    const result = await call('POST', '/user/login', doc);
    if (!result.errors) {
      const { token } = result.data;
      sessionStorage.setItem('token', token);
    }
    return result;
  },

  signout() {
    sessionStorage.removeItem('token');
  },

  async get(path) {
    return await call('GET', path, null);
  },

  async post(path, doc) {
    return await call('POST', path, doc);
  },

  async patch(path, doc) {
    return await call('PATCH', path, doc);
  },

  async put(path, doc) {
    return await call('PUT', path, doc);
  },

  async delete(path) {
    return await call('DELETE', path, null);
  },

};

export default API;
