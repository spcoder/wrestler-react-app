import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/Error/ErrorBoundry';
import LoginScene from './scenes/User/LoginScene';
import LogoutScene from './scenes/User/LogoutScene';
import RegisterScene from './scenes/User/RegisterScene';
import ConfirmScene from './scenes/User/ConfirmScene';
import AppHeader from './components/App/AppHeader';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <div>
            <AppHeader/>
            <div className={'app-content'}>
              <div className={'inner'}>
                <Switch>
                  {/*<PrivateRoute exact path="/projects" component={withLookup(ProjectListScene, API.findProjects)}/>*/}
                  <Route exact path="/login" component={LoginScene}/>
                  <Route exact path="/logout" component={LogoutScene}/>
                  <Route exact path="/register" component={RegisterScene}/>
                  <Route exact path="/confirm" component={ConfirmScene}/>
                  <Route path="/" component={LoginScene}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
