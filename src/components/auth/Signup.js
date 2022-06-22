import {useContext,useLayoutEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import { Context } from '../../context/authContext';

const Signup = () => {
const {
signUp,
signupErr,
setSignupErr
}=useContext(Context)

useLayoutEffect(()=>{
if(signupErr)setSignupErr('')
},[])

const {
email,
password,
onChangeEmailHandler,
onChangePasswordHandler,
submitFormHandler,
passwordIsValid,
emailIsValid,
passwordHasErr,
emailHasErr,
onEmailBlurHandler,
onPasswordBlurHandler
}=useAuth(signUp)

let emailHasErrorClass = !emailIsValid && emailHasErr ? 'border-red-400' : 'border-slate-200'
let passwordHasErrorClass = !passwordIsValid && passwordHasErr ? 'border-red-400' : 'border-slate-200'

let formIsValid = passwordIsValid && emailIsValid ? true : false;

return (
<form className='px-5' onSubmit={submitFormHandler}>
    <div className='mt-4 mb-2'>
        <label className='font-bold' htmlFor='email'>Email:</label>
        <input onBlur={onEmailBlurHandler} name='email' value={email} onChange={onChangeEmailHandler} id="email" type='email' placeholder='Enter your email' className={`p-1 border w-full ${emailIsValid && 'border-green-600'} ${emailHasErrorClass} focus:outline-none`} required />
        <small className='text-darkGray'>example@gmail.com</small>
    </div>
    <div>
        <label className='font-bold' htmlFor="password" >Password:</label>
        <input onBlur={onPasswordBlurHandler} name='password' value={password} onChange={onChangePasswordHandler} id='password' type='password' placeholder='Enter your password' className={`p-1 border w-full  ${passwordIsValid && 'border-green-600'} ${passwordHasErrorClass} focus:outline-none`} required />
        <small className='text-darkGray'>must be at least 8,16 characters</small>
    </div>
    {signupErr && <small className='text-red-400 font-bold'>{signupErr}</small>}
    <div className='text-center p-5'>
        <button disabled={!formIsValid} type='submit' className='text-white font-bold bg-darkSky px-5 py-2 rounded duration-200 disabled:bg-slate-300 hover:opacity-90'>Sign up</button>
    </div>
</form>

)
}

export default Signup