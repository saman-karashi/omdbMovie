import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const MobileNav = ({user}) => {
const [isOpen,setIsOpen]=useState(false);

return (
<>
  {/* Hamburger */}
  <div onClick={()=> setIsOpen(prev => !prev)} className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
  </div>

  <div className={`fixed w-80 z-10 h-screen bg-neutral-900 right-0 top-16 transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
      {user &&
      <div className='my-10 flex justify-center flex-col items-center'>
          <div className='mx-5'>
              <img src={"/"} alt="avatar" className="w-16 h-16 rounded-full" /> 
          </div> 
          <h1 className='text-white mx-5'>Welcome Saman!</h1>
      </div>
      }
      
      <div className='text-center'>
      <nav>
          <ul className='text-white text-center'>
              {user ?
              <>
              <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/'>Home</Link>
              </li>
              <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/watchlists'>Watchlists</Link>
              </li>
              <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/profile'>Profile</Link>
              </li>
              </>  
              :
              <>
                <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/sign-up'>Sign up</Link>
                </li>
              </>
          }
          </ul>
        </nav>
        {user &&
        <div className='mt-5 text-center'>
          <button className='px-5 py-2 rounded-full text-white bg-darkRed font-bold'>Log out</button>
          </div>
        }
      </div>
    </div>
</>
)
}

export default MobileNav