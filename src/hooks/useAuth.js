import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { supabase } from '../supabaseClient';


const useAuth = (auth)=>{
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const submitFormHandler =async(e)=>{
e.preventDefault();

await auth({email,password});

const user=supabase.auth.user();

if(user)navigate('/');

setEmail('');
setPassword('');
}

const onChangeEmailHandler = (e)=>{
setEmail(e.target.value);
}

const onChangePasswordHandler =(e)=>{
setPassword(e.target.value);
}

return{
onChangeEmailHandler,
onChangePasswordHandler,
submitFormHandler,
password,
email,
}

}

export default useAuth;