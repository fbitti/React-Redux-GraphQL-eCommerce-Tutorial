import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layouts
import HomepageLayout from './layouts/HomepageLayout';
import MainLayout from './layouts/MainLayout';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => 
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        } />
        <Route path="/registration" render={() => 
          <MainLayout>
            <Registration />
          </MainLayout>
        } />
        <Route path="/login" render={() => 
          <MainLayout>
            <Login />
          </MainLayout>
        } />
      </Switch>
    </div>
  );
}

export default App;
