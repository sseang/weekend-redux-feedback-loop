import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//import components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

//send axios post instead?
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Feeling />
        </Route>

        {/* <Route path="/understand" exact>
          <Understanding />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
