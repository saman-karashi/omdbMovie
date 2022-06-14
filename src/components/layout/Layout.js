import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({children}) => {
  return (
    <>
     <Navbar />
     <main className='mt-16'>
      {children}
     </main>
    </>
  )
}

export default Layout