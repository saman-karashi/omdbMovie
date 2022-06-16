import {useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Context } from '../context/authContext';

const useAuth = (auth)=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate = useNavigate()
const {
setError
}=useContext(Context);

const submitFormHandler =async(e)=>{
e.preventDefault();

await auth({email,password})

const user=supabase.auth.user();

if(user)navigate('/')

setEmail('')
setPassword('')
}

const onChangeEmailHandler = (e)=>{
setEmail(e.target.value);
setError('')
}

const onChangePasswordHandler =(e)=>{
setPassword(e.target.value)
setError('')
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