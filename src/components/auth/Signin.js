import React, {useContext} from 'react'
import { Context } from '../../context/authContext';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
const {
signIn,
signinErr
}=useContext(Context)

const {
email:signinEmail,
onChangeEmailHandler:signinEmailChangeHandler,
submitFormHandler:signinFormHandler,
password:signinPassword,
onChangePasswordHandler:signinPassChangeHandler
}=useAuth(signIn);


return (
<form className='px-5' onSubmit={signinFormHandler}>
    <div className='my-4'>
        <label className='font-bold' htmlFor='email'>Email:</label>
        <input value={signinEmail} onChange={signinEmailChangeHandler} id="email" type='email' placeholder='Enter your email' className='p-1 border border-lightGray w-full focus:outline-none' required />
    </div>
    <div className='mt-4'>
        <label className='font-bold' htmlFor='password'>Password:</label>
        <input value={signinPassword} onChange={signinPassChangeHandler} id="password" type='password' placeholder='Enter your password' className='p-1 border border-lightGray w-full focus:outline-none' required />
    </div>
    {signinErr && <small className='font-bold text-red-400'>{signinErr}</small>}
    <div className='text-center p-5'>
        <button type='submit' className='text-white font-bold bg-black px-6 py-2 rounded duration-200 hover:opacity-90'>Login</button>
    </div>
</form> 
  )
}

export default Signin