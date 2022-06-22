import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { supabase } from '../supabaseClient';

const emailRegex = /^[A-Z0-9\W]+@gmail.com$/i;
const passwordRegex = /^[A-Z0-9\W]{8,16}$/i;

const useAuth = (auth)=>{
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [emailIsValid,setEmailIsValid]=useState(false);
const [passwordIsValid,setPasswordIsValid]=useState(false);
const [emailHasErr,setEmailHasErr]=useState(false);
const [passwordHasErr,setPasswordHasErr]=useState(false);

const submitFormHandler =async(e)=>{
e.preventDefault();

await auth({email,password});

const user=supabase.auth.user();

if(user)navigate('/');

setEmail('');
setPassword('');
setEmailIsValid(false);
setPasswordIsValid(false);
}

const onChangeEmailHandler = (e)=>{
setEmail(e.target.value);

if(emailRegex.test(e.target.value)){
setEmailIsValid(true);
setEmailHasErr(false)
}else{
setEmailHasErr(true)
setEmailIsValid(false)
}
}

const onChangePasswordHandler =(e)=>{
setPassword(e.target.value);

if(passwordRegex.test(e.target.value)){
setPasswordIsValid(true);
setPasswordHasErr(false)
}else{
setPasswordHasErr(true);
setPasswordIsValid(false);
}

}

const onEmailBlurHandler = ()=>{
if(emailRegex.test(email)){
setEmailIsValid(true);
setEmailHasErr(false)
}else{
setEmailIsValid(false);
setEmailHasErr(true)
}
}

const onPasswordBlurHandler =()=>{
if(passwordRegex.test(password)){
setPasswordIsValid(true);
setPasswordHasErr(false)
}else{
setPasswordIsValid(false);
setPasswordHasErr(true)
}
}

return{
onChangeEmailHandler,
onChangePasswordHandler,
submitFormHandler,
onEmailBlurHandler,
onPasswordBlurHandler,
password,
email,
passwordIsValid,
emailIsValid,
passwordHasErr,
emailHasErr
}

}

export default useAuth;