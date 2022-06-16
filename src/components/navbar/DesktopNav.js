import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/authContext';

const DesktopNav = ({ user ,avatar_url,username}) => {
const { logOut } = useContext(Context);

  return (
    <header className='flex justify-between w-full'>
      <div className='lg:flex lg:items-center'>
        <h1 className='text-white font-bold text-xl mr-5'>
          OMDB<span className='text-darkSky'>Movie</span>
        </h1>
        {/* Desktop nav */}
        <nav className='hidden lg:block'>
          <ul className='text-white flex'>
            {user ? (
              <>
                <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/watchlists'>Watchlists</Link>
                </li>
                <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/profile'>Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='ml-4 duration-200 ease-ease-in-out hover:text-darkSky'>
                  <Link to='/sign-up'>Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      {user && (
        <div className='hidden lg:flex lg:items-center'>
        {username &&  <h1 className='text-white mx-5 whitespace-nowrap overflow-hidden text-ellipsis'>{`Welcome ${username}`}</h1>}
          <div className='mx-2'>
            <img className={`rounded-full w-16 h-16 ${avatar_url ? "opacity-1" : 'opacity-0'}`} src={avatar_url && `https://sbybrlsjodbbxrkdbsru.supabase.co/storage/v1/object/public/${avatar_url}`} />
          </div>
          <div className='ml-5'>
            <button
              onClick={logOut}
              className='px-5 py-2 rounded-full text-white bg-darkRed font-bold duration-200 hover:opacity-80'
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default DesktopNav;
