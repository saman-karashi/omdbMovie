import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
//import Home from './components/home/Home';
//import Watchlists from './components/watchlists/Watchlists';
//import Auth from './components/auth/Auth'
//import Profile from './components/profile/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
          {/* 
          <Route path='/' element={<Home />} />
          <Route path='/watchlists' element={<Watchlists />} /> 
          <Route path='/sign-up' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          */}
      </Routes>
    </BrowserRouter>
  )
}

export default App