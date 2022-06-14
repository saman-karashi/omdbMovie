import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Auth from './components/auth/Auth'
//import Watchlists from './components/watchlists/Watchlists';
//import Profile from './components/profile/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/sign-up' element={<Auth />} />
          {/* 
          <Route path='/watchlists' element={<Watchlists />} /> 
          <Route path='/profile' element={<Profile />} />
          */}
      </Routes>
    </BrowserRouter>
  )
}

export default App