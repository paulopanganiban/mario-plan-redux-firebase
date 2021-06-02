import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Todo from './features/todo/Todo';
import 'moment-timezone'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Todo/> */}
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/create'>
            <CreateProject />
          </Route>
          <Route path='/project/:id'>
            <ProjectDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
