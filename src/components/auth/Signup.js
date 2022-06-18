import {useContext} from 'react';
import useAuth from '../../hooks/useAuth';
import { Context } from '../../context/authContext';

const Signup = () => {
const {
signUp,
signupErr
}=useContext(Context)

const {
email:signupEmail,
password:signupPassword,
onChangeEmailHandler:signupEmailChangeHandler,
onChangePasswordHandler:signupPassChangeHandler,
submitFormHandler:signupFormHandler
}=useAuth(signUp)


return (
<form className='px-5' onSubmit={signupFormHandler}>
    <div className='my-4'>
        <label className='font-bold' htmlFor='email'>Email:</label>
        <input value={signupEmail} onChange={signupEmailChangeHandler} id="email" type='email' placeholder='Enter your email' className='p-1 border border-slate-200 w-full focus:outline-none' required />
    </div>
    <div className='mt-4'>
        <label className='font-bold' htmlFor="password" >Password:</label>
        <input value={signupPassword} onChange={signupPassChangeHandler} id='password' type='password' placeholder='Enter your password' className='p-1 border border-slate-200 w-full focus:outline-none' required />
    </div>
    {signupErr && <small className='text-red-400 font-bold'>{signupErr}</small>}
    <div className='text-center p-5'>
        <button type='submit' className='text-white font-bold bg-darkSky px-5 py-2 rounded duration-200 hover:opacity-90'>Sign up</button>
    </div>
</form>
)
}

export default Signup