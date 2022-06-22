import React, {useContext,useLayoutEffect} from 'react'
import { Context } from '../../context/authContext';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
const {
signIn,
signinErr,
setSigninErr
}=useContext(Context)

useLayoutEffect(()=>{
if(signinErr)setSigninErr('')
},[])

const {
email,
onChangeEmailHandler,
submitFormHandler,
password,
onChangePasswordHandler,
onEmailBlurHandler,
onPasswordBlurHandler,
passwordIsValid,
emailIsValid,
passwordHasErr,
emailHasErr
}=useAuth(signIn);

let emailHasErrorClass = !emailIsValid && emailHasErr ? 'border-red-400' : 'border-slate-200'
let passwordHasErrorClass = !passwordIsValid && passwordHasErr ? 'border-red-400' : 'border-slate-200'

console.log(emailHasErrorClass);

let formIsValid = passwordIsValid && emailIsValid ? true : false;

return (
<form className='px-5' onSubmit={submitFormHandler}>
    <div className='mt-4 mb-2'>
        <label className='font-bold' htmlFor='email'>Email:</label>
        <input onBlur={onEmailBlurHandler} value={email} onChange={onChangeEmailHandler} id="email" type='email' placeholder='Enter your email' className={`p-1 border w-full ${emailHasErrorClass} ${emailIsValid && 'border-green-600'} focus:outline-none`} required />
       <small className='text-darkGray'>example@gmail.com</small>
    </div>
    <div>
        <label className='font-bold' htmlFor='password'>Password:</label>
        <input onBlur={onPasswordBlurHandler} value={password} onChange={onChangePasswordHandler} id="password" type='password' placeholder='Enter your password' className={`p-1 border w-full ${passwordIsValid && 'border-green-600' } ${passwordHasErrorClass} focus:outline-none`} required />
       <small className='text-darkGray'>must be at least 8,16 characters</small> 
    </div>
    {signinErr && <small className='font-bold text-red-400'>{signinErr}</small>}
    <div className='text-center p-5'>
        <button disabled={!formIsValid} type='submit' className='text-white font-bold bg-black px-6 py-2 rounded duration-200 disabled:bg-slate-300 hover:opacity-90'>Login</button>
    </div>
</form> 
  )
}

export default Signin