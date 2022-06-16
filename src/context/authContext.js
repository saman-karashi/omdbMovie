import {createContext,useState} from 'react';
import {useDispatch } from 'react-redux';
import { supabase } from '../supabaseClient';
import { toast } from 'react-toastify';
import { resetStore } from '../features/fetchMoviesSlice';

export const Context = createContext({
signUp:()=>{},
logOut:()=>{},
signIn:()=>{},
avatar_url:'',
username:'',
error:'',
message:'',
setError:()=>{},
fetchUserProfiles:()=>{}
})


const AuthContext =({children})=>{
const dispatch = useDispatch();
const [error,setError]=useState('');
const [avatar_url,setAvatarUrl]=useState('');
const [username,setUsername]=useState('');
const [message,setMessage]=useState('')

const signUp =async({email,password})=>{
try {
const {error,session} = await supabase.auth.signUp({
email,
password
})

if(error)setError('You\'ve already registered.')
if(session)toast.success('You\'ve successfully signed up.')      
}catch (error) {
throw error.message;
}
}


const signIn =async({email})=>{
try {
const {error,session} = await supabase.auth.signIn({email})  
setMessage('Verfication link is sent to your email.')
if(error)console.log(error.message)
if(session){
toast.success('You\'ve successfully logged in.') 
setMessage('')
} 
} catch (error) {
throw error.message;  
}
}


const logOut = async()=>{
try {
const {error} = await supabase.auth.signOut();
dispatch(resetStore())

if(error)return;
toast.warning('You\'ve logged out.')
}catch (error) {
throw error.message; 
}
}

const fetchUserProfile =async()=>{
try {
const user= supabase.auth.user();

if(user){
const {data,error}=await supabase.from('profiles').select('username,avatar_url').eq('id',user.id).single()
if(error)console.log(error.message);
if(data){
setAvatarUrl(data.avatar_url)
setUsername(data.username)
}
}

} catch (error) {
throw error.message;
}
}

const values={
signIn,
signUp,
logOut,
error,
setError,
fetchUserProfile,
avatar_url,
username,
message
}

return <Context.Provider value={values} >{children}</Context.Provider>
}

export default AuthContext 