import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App