import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect,useContext} from 'react';
import { supabase } from '../../supabaseClient';
import {ToastContainer} from 'react-toastify';
import { Context } from '../../context/authContext';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
const navigate=useNavigate();
const [user,setUser]=useState(null);
const {
fetchUserProfile,
avatar_url,
username
}=useContext(Context)

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

return (
  <div className='container py-5 px-2 mx-auto flex justify-between lg:block'>
    <ToastContainer
    pauseOnHover={false}
    pauseOnFocusLoss={false}
      />
      <DesktopNav user={user} avatar_url={avatar_url} username={username} />
      <MobileNav  user={user} avatar_url={avatar_url} username={username}  />

  </div>
)
}

export default Navbar