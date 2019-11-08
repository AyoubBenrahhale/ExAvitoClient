import React, { Component } from 'react';
import './App.css';
import { Router,Route} from 'react-router-dom'
import history from './history'
import AddUser from './Component/AddUser'
import ShowUsersContenaire from './Contenaire/ShowUsersContenaire'
import UpdateUser from './Component/UpdateUser'

import Navig from './Navbar';
function App() {
  return (
 
    <div className="App">
       <Router history={history}>
          <div>
            <Navig/>
           <Route exact path="/AddUser" component={AddUser} />
           <Route exact path="/ShowUsers" component={ShowUsersContenaire} />
           <Route exact path="/UpdateUser" component={UpdateUser} />

           
          </div>
        </Router>
      
           
      </div>
  );
}

export default App;
