import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {Home, Landing, Detail, Create } from './pages/index.js';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/countries/:id' component={Detail} />
        <Route exact path='/create' component={Create}/>
      </Switch>
    </div>
  );
}

export default App;