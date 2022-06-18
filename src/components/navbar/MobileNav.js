import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/authContext';

const MobileNav = ({isOpen,user,setIsOpen}) => {
const {
avatar_url,
username,
logOut
}=useContext(Context);

const logoutHandler = ()=>{
logOut()
}

const closeSidebarMenuHandler =()=>{
setIsOpen(false)
}

return (
<nav onMouseLeave={closeSidebarMenuHandler} className={`text-center fixed right-0 top-16 w-72 bg-black rounded-l-md h-96 z-10 transition-all duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
   {user &&
   <div className='flex flex-col items-center my-5'>
        <h1 className='text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{`Welcome ${username}`}</h1>
        {avatar_url &&
        <div className='mt-4'>
            <img src={`https://sbybrlsjodbbxrkdbsru.supabase.co/storage/v1/object/public/${avatar_url}`} alt={username} className='rounded-full w-16 h-16'/>
        </div>
        } 
    </div>
   } 
    <ul>
        {!user ?
        <>
        <li className='text-white my-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/'}>Home</Link>
        </li>
        <li className='text-white my-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/sign-in'}>Sign in</Link>
        </li>
        </>
        :
        <>
        <li className='text-white my-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/'}>Home</Link>
        </li>
        <li className='text-white my-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/watchlists'}>Watchlists</Link>
        </li>
        <li className='text-white my-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/profile'}>Profile</Link>
        </li>
        </>
    }
    </ul>
    {user &&
    <button onClick={logoutHandler} className='mt-2 text-white font-bold rounded-full px-5 py-2 bg-red-600 transition-all duration-200 hover:opacity-90'>Log out</button>
    }
</nav>
  )
}

export default MobileNav