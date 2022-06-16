import {useState,useContext} from 'react';
import Layout from '../layout/Layout';
import { Context } from '../../context/authContext';
import useAuth from '../../hooks/useAuth';

const Auth = () => {
const [isActiveTab,setIsActiveTab]=useState(false)
const {
signUp,
signIn,
error,
message
}=useContext(Context)

const {
email:signupEmail,
password:signupPassword,
onChangeEmailHandler:signupEmailChangeHandler,
onChangePasswordHandler:signupPassChangeHandler,
submitFormHandler:signupFormHandler
}=useAuth(signUp)

const {
email:signinEmail,
onChangeEmailHandler:signinEmailChangeHandler,
submitFormHandler:signinFormHandler
}=useAuth(signIn)


return (
<Layout>
    <section className='bg-white rounded w-96 mx-auto overflow-hidden'>
        <header className='flex justify-between'>
           <button onClick={()=> setIsActiveTab(false)} className='p-2 bg-orange-400 flex-1 font-bold text-white hover:opacity-90'>Sign up</button>
           <button onClick={()=> setIsActiveTab(true)}  className='p-2 flex-1 bg-lightGray font-bold hover:opacity-90'>Sign in</button>
        </header>
        {!isActiveTab ?
         /* Sign up */
        <form className='px-5' onSubmit={signupFormHandler}>
            <div className='my-4'>
                <label className='font-bold' htmlFor='email'>Email:</label>
                <input value={signupEmail} onChange={signupEmailChangeHandler} id="email" type='email' placeholder='Enter your email' className='p-1 border border-lightGray w-full focus:outline-none' required />
            </div>
            <div className='mb-2'>
                <label className='font-bold' htmlFor="password" >Password:</label>
                <input value={signupPassword} onChange={signupPassChangeHandler} id='password' type='password' placeholder='Enter your password' className='p-1 border border-lightGray w-full focus:outline-none' required />
            </div>
            {error && <small className='text-red-400 font-bold'>{error}</small>}
            <div className='text-center p-5'>
                <button type='submit' className='text-white font-bold bg-darkSky px-5 py-2 rounded duration-200 hover:opacity-90'>Sign up</button>
            </div>
        </form>
        :
        //   Sign in
         <form className='px-5' onSubmit={signinFormHandler}>
            {message &&  <h1 className='font-bold text-center mt-4 text-orange-400'>{message}</h1>}
            <div className='my-4'>
                <label className='font-bold' htmlFor='email'>Email:</label>
                <input value={signinEmail} onChange={signinEmailChangeHandler} id="email" type='email' placeholder='Enter your email' className='p-1 border-2 border-lightGray w-full focus:outline-none' required />
            </div>
            <div className='text-center p-2'>
                <button type='submit' className='text-white font-bold bg-black px-5 py-2 rounded duration-200 hover:opacity-90'>Login</button>
            </div>
        </form> 
        }
    </section>
</Layout>
  )
}

export default Auth