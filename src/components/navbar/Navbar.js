import {useState,useEffect} from 'react';
import {supabase} from '../../supabaseClient';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
const [user,setUser]=useState(null)

useEffect(()=>{
setUser(supabase.auth.user());

const unsubscribe=supabase.auth.onAuthStateChange((event,session)=>{
if(event === 'SIGNED_IN'){
setUser(session.user)
}else if(event === 'SIGNED_OUT') {
setUser(null)
}
})

if(user)toast.success('You successfully logged in.');

return ()=> unsubscribe.data.unsubscribe()
},[user])




return (
  <div className='container py-5 px-2 mx-auto flex justify-between lg:block'>
      <DesktopNav user={user} />
      <MobileNav user={user} />
      <ToastContainer />
  </div>
)
}

export default Navbar