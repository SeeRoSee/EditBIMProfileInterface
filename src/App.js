import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Erstellen from './components/pages/Erstellen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bearbeiten from './components/pages/Bearbeiten';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/erstellen' component={Erstellen} />
          <Route path='/bearbeiten' component={Bearbeiten} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
