    <nav className={`rounded-l-lg bg-black fixed right-0 top-16 z-10 h-full flex flex-col px-20 ${isOpen ? 'right-0' : '-right-full'} md:w-full md:justify-between md:px-0 md:flex-row md:static md:bg-transparent md:h-auto`}>
       <div className='flex items-center flex-col order-2 md:order-none md:flex-row'>
         <h1 className='text-white font-bold text-xl hidden md:block'>OMDB<span className='text-darkSky'>Movie</span></h1>
         <ul className='flex items-center flex-col md:ml-10 md:flex-row'>
          {!user ?
          <>
            <li className='text-white mt-5 transition-all duration-250 hover:text-darkSky md:mt-0 md:mr-5'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-white mt-3 transition-all duration-250 hover:text-darkSky md:mt-0 md:mr-5'>
              <Link to='/sign-in'>Sign in</Link>
            </li>  
          </>

          :
          <>
            <li className='text-white mt-5  transition-all duration-250 hover:text-darkSky md:mt-0 md:mr-5'>
              <Link to='/'>Home</Link>
            </li>
           <li className='text-white mt-3 transition-all duration-250 hover:text-darkSky md:mt-0 md:mr-5'>
             <Link to='/watchlists'>watchlists</Link>
           </li>
           <li className='text-white mt-3 transition-all duration-250 hover:text-darkSky md:mt-0 md:mr-5'>
             <Link to='/profile'>Profile</Link>
           </li>
          </>
          }
          </ul>

         {user &&<button onClick={logOut} className='bg-red-600 py-2 px-5 rounded-full text-white font-bold mt-4 hover:opacity-90 transition-all duration-250 md:mt-0 md:hidden'>Log out</button>}
       </div>
       {user &&
       <div className='flex items-center flex-col order-1 mt-5 md:mt-0 md:order-none md:flex-row'>
         <h2 className='text-white mt-2 my-2 md:mr-5 md:my-0'>Welcome Saman!</h2>
         <img src={avatar_url && `https://sbybrlsjodbbxrkdbsru.supabase.co/storage/v1/object/public/${avatar_url}`} alt={username} className='rounded-full w-16 h-16 mt-2 md:mr-5' />
         <button onClick={logOut} className='bg-red-600 py-2 px-5 rounded-full text-white hidden font-bold hover:opacity-90 transition-all duration-250 md:block'>Log out</button>
       </div>
       }
  
    </nav>
    <h1 className='text-white font-bold text-xl md:hidden'>OMDB<span className='text-darkSky'>Movie</span></h1>
   <div onClick={()=> setIsOpen(prev => !prev)} className={`hamburger-menu ${isOpen ? 'active' : ''} md:hidden`}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
   </div>