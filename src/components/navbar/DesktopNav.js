import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/authContext';


const DesktopNav = ({user}) => {
const {
username,
avatar_url,
logOut
} = useContext(Context)

const logoutHandler = ()=>{
logOut()
}

return (
    <nav className='flex justify-between items-center basis-full'>
      <ul className='flex items-center'>
       {user ?
       <>
        <li className='text-white mx-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/'}>Home</Link>
        </li>
        <li className='text-white mx-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/watchlists'}>Watchlists</Link>
        </li>
        <li className='text-white mx-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/profile'}>Profile</Link>
        </li>
       </>
       :
       <>
        <li className='text-white mx-2 transition-all duration-200 hover:text-darkSky'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='text-white mx-2 transition-all duration-200 hover:text-darkSky'>
            <Link to={'/sign-in'}>Sign in</Link>
        </li>
       </>

       }
      </ul>
      {user &&
      <div className='flex items-center'>
      {username &&  <h1 className='text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{`Welcome ${username}`}</h1>} 
  
        <div className="mx-2">
         {avatar_url &&  <img src={`https://sbybrlsjodbbxrkdbsru.supabase.co/storage/v1/object/public/${avatar_url}`} alt={username} className='mx-2 rounded-full w-16 h-16'/> }
        </div>
        
         <button onClick={logoutHandler} className='text-white font-bold rounded-full px-5 py-2 bg-red-600 transition-all duration-200 hover:opacity-90'>Log out</button>
    </div>
      }
    </nav>
  )
}

export default DesktopNav