import {createContext,useState} from 'react';
import { supabase } from '../supabaseClient';
import { toast } from 'react-toastify';

export const Context = createContext({
signUp:()=>{},
logOut:()=>{},
signIn:()=>{},
fetchUserProfile:()=>{},
avatar_url:'',
username:'',
signinErr:'',
signupErr:''
})

const AuthContext =({children})=>{
const [avatar_url,setAvatarUrl]=useState('');
const [username,setUsername]=useState('');
const [signupErr,setSignupErr]=useState('');
const [signinErr,setSigninErr]=useState('');

const signUp =async({email,password})=>{
try {
const {error,session} = await supabase.auth.signUp({
email,
password
})

if(error)setSignupErr('You\'ve already registered.')
if(session){
toast.success('You\'ve successfully signed up.')   
setSignupErr('')   
}
}catch (error) {
throw error.message;
}
}


const signIn =async({email,password})=>{
try {
const {error,session} = await supabase.auth.signIn({email,password})  
if(error)setSigninErr(error.message);
if(session){
toast.success('You\'ve successfully logged in.') 
setSigninErr('')
console.log(session);
} 
} catch (error) {
throw error.message;  
}
}


const logOut = async()=>{
try {
const {error} = await supabase.auth.signOut();
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
if(error)return;
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
fetchUserProfile,
username,
avatar_url,
signinErr,
signupErr
}

return <Context.Provider value={values} >{children}</Context.Provider>
}

export default AuthContext 