import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
const [isOpen,setIsOpen]=useState(false)

  return (
    <div className='container py-5 px-2 mx-auto flex justify-between lg:block'>
       
        <header className='flex justify-between'>
            <div className='lg:flex lg:items-center'>
                <h1 className='text-white font-bold text-xl mr-5'>OMDB<span className='text-darkSky'>Movie</span></h1>
                  {/* Desktop nav */}
                 <nav className='hidden lg:block'>
                     <ul className='text-white flex'>
                         <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                             <Link to='/'>Home</Link>
                         </li>
                         <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                             <Link to='/watchlists'>Watchlists</Link>
                         </li>
                         <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                             <Link to='/profile'>Profile</Link>
                         </li>
                     </ul>
                 </nav>
            </div>
            <div className='hidden lg:flex lg:items-center'>
               <h1 className='text-white mx-5'>Welcome Saman!</h1>
               <div className='mx-5'>
                 <img src={"/"} alt="avatar" className="w-16 h-16 rounded-full" /> 
               </div> 
               <div className='ml-5'>
                <button className='px-5 py-2 rounded-full text-white bg-darkRed font-bold'>Log out</button>
               </div>
            </div>
        </header>

        {/* Hamburger */}
        <div onClick={()=> setIsOpen(prev => !prev)} className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        {/* Mobile nav */}
         <div className={`fixed w-80 h-screen bg-black right-0 top-16 transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
           <div className='my-10 flex justify-center flex-col items-center'>
               <div className='mx-5'>
                 <img src={"/"} alt="avatar" className="w-16 h-16 rounded-full" /> 
               </div> 
                <h1 className='text-white mx-5'>Welcome Saman!</h1>
           </div>
           <div>
            <nav>
                <ul className='text-white text-center'>
                    <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                        <Link to='/watchlists'>Watchlists</Link>
                    </li>
                    <li className='mt-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
              </nav>
              <div className='mt-5 text-center'>
                <button className='px-5 py-2 rounded-full text-white bg-darkRed font-bold'>Log out</button>
               </div>
           </div>
         </div>
         
    </div>
  )
}

export default Navbar