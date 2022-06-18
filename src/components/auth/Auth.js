import {useState} from 'react';
import Layout from '../layout/Layout';
import Signup from './Signup';
import Signin from './Signin';

const Auth = () => {
const [isActiveTab,setIsActiveTab]=useState(false);

return (
<Layout>
    <section className='bg-white rounded w-96 mx-auto overflow-hidden'>
        <header className='flex justify-between'>
           <button onClick={()=>setIsActiveTab(false)} className={`p-2 bg-orange-400 flex-1 font-bold text-white hover:opacity-90 ${!isActiveTab && 'text-orange-400 bg-transparent border-2 border-b-orange-400'}`}>Sign up</button>
           <button onClick={()=> setIsActiveTab(true)} className={`p-2 flex-1 bg-slate-100 font-bold ${isActiveTab && 'text-black bg-transparent border-2 border-b-black'}`}>Sign in</button>
        </header>
        {!isActiveTab ?
         <Signup />
        :
         <Signin />
        }
    </section>
</Layout>
  )
}

export default Auth;
