import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect,useContext} from 'react';
import { supabase } from '../../supabaseClient';
import {useNavigate} from 'react-router-dom';
import { Context } from '../../context/authContext';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


const Navbar = () => {
const navigate=useNavigate();
const [user,setUser]=useState(null);
const [isOpen,setIsOpen]=useState(false);
const {
fetchUserProfile,
} = useContext(Context);

useEffect(()=>{
fetchUserProfile()
},[user])

useEffect(()=>{
setUser(supabase.auth.user());

const {data}=supabase.auth.onAuthStateChange((event,session)=>{
if(event === 'SIGNED_IN'){
setUser(session.user)
}else if(event === 'SIGNED_OUT') {
navigate('/')
setUser(null)
}
})

return ()=> data.unsubscribe()
},[user])

const isTablet = useMediaQuery({query:'(max-width:768px)'});

return (
  <div className='flex justify-between px-2 py-4 lg:container lg:mx-auto'>
    <header className='flex items-center basis-full'>
       <h1 className='font-bold text-white text-lg mr-5'>OMDB<span className='text-darkSky'>Movie</span></h1>
       {
      isTablet ? <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} user={user}/> : <DesktopNav user={user} />
       }
    </header>
       <div onClick={()=> setIsOpen(prev => !prev)} className={`hamburger-menu block ${isOpen ? 'active' : ''} md:hidden`}>
         <div className='bar'></div>
         <div className='bar'></div>
         <div className='bar'></div>
       </div>

  </div>
)
}

export default Navbar