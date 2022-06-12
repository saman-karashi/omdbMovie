import {useState,useEffect} from 'react';
import {supabase} from '../../supabaseClient';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
const [user,setUser]= useState(null);

useEffect(()=>{
setUser(supabase.auth.user());

const unSubscribe =supabase.auth.onAuthStateChange((event,session)=>{
if(event === 'SIGNED_IN'){
setUser(session.user)
}else if(event === 'SIGNED_OUT') {
setUser(null)
}
})

return ()=> unSubscribe.data.unsubscribe()

},[])

  return (
    <div className='container py-5 px-2 mx-auto flex justify-between lg:block'>
        <DesktopNav user={user} />
        <MobileNav user={user} />
    </div>
  )
}

export default Navbar