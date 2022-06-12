import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home'

const Layout = () => {
  return (
    <>
     <Navbar />
     <main>
       <Home />
     </main>
    </>
  )
}

export default Layout