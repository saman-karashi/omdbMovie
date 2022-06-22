import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect,useContext,useRef} from 'react';
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
const hamburgerRef = useRef()

useEffect(()=>{
let isMounted = true;
if(isMounted)fetchUserProfile();
return ()=> isMounted = false;
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

useEffect(()=>{
let listenToDocument=window.addEventListener('click',(e)=>{
if(isTablet){
if(!hamburgerRef.current.contains(e.target)){
setIsOpen(false)
}

}
})

return ()=> document.removeEventListener('click',listenToDocument)
},[isOpen])

return (
  <div className='flex justify-between p-4 items-center md:container md:mx-auto'>
    <header className='flex items-center basis-full'>
       <h1 className='font-bold text-white text-lg md:text-xl md:mr-5'>OMDB<span className='text-darkSky'>Movie</span></h1>
       {
      isTablet ? <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} user={user}/> : <DesktopNav user={user} />
       }
    </header>
       <div ref={hamburgerRef} onClick={()=> setIsOpen(prev => !prev)} className={`hamburger-menu ${isOpen ? 'active' : ''} md:hidden`}>
         <div className='bar'></div>
         <div className='bar'></div>
         <div className='bar'></div>
       </div>

  </div>
)
}

export default Navbar