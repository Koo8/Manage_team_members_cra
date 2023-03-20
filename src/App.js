import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import GroupTeam from './GroupTeam';
import AddMember from './AddMember';
import Nav1 from './Nav1';
import NotFound from './NotFound';
import SideNote from './SideNote';
import CreateTeam from './CreateTeam';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Nav1 />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/team' Component={GroupTeam} />
        <Route path='/add_member' Component={AddMember} />
        <Route path='/create_team' Component={CreateTeam} />
        <Route path='/sidenote' Component={SideNote} />
        <Route path='/login' Component={Login} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//
