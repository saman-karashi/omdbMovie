import {createContext,useState} from 'react';
import { supabase } from '../supabaseClient';

export const Context = createContext({
signUp:()=>{},
logOut:()=>{},
signIn:()=>{}
})


const AuthContext =({children})=>{
const signUp =async({email,password})=>{
try {
const {error} = await supabase.auth.signUp({
email,
password
})

if(error)console.log(error.message);
           
}catch (error) {
throw error.message;
}
}


const logOut = async()=>{
try {
const {error} = await supabase.auth.signOut();

if(error)console.log(error.message);
}catch (error) {
throw error.message; 
}
}

const signIn =async({email,password})=>{
try {
const {error} = await supabase.auth.signIn({email,password})  

if(error)console.log(error.message);

} catch (error) {
throw error.message;  
}
}

return <Context.Provider value={{signUp,logOut,signIn}} >{children}</Context.Provider>
}

export default AuthContext 