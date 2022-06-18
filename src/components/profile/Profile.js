import {useState,useContext} from 'react';
import {supabase} from '../../supabaseClient';
import Layout from '../layout/Layout';
import {MoonLoader} from 'react-spinners';
import { Context } from '../../context/authContext';

const Profile = () => {
const [avatar_url,setAvatarUrl]=useState('');
const [website,setWebsite]=useState('');
const [username,setUsername]=useState('');
const [isUploading,setIsUploading]=useState(false);
const {
fetchUserProfile
} = useContext(Context)

const fileChangeHandler =async(e)=>{
try {
const file = e.target.files[0];
const txtFile = file.name.split('.').pop()
const changedFileName=`${Math.random()}.${txtFile}`;

setIsUploading(true)
const {data,error} = await supabase.storage.from('avatars').upload(changedFileName,file)

if(error)console.log(error.message)
if(data){
setAvatarUrl(data.Key);
setIsUploading(false);
}

} catch (error) {
throw error.message;
}

}

const formSubmitHandler =async(e)=>{
e.preventDefault();

try {
const {id} = supabase.auth.user();
const date = new Date().toISOString().slice(0,10)
const {error}=await supabase.from('profiles').upsert({
avatar_url,
username,
website,
updated_at:date,
id:id
})

if(error)console.log(error.message)
} catch (error) {
throw error.message;  
}


fetchUserProfile()

setWebsite('')
setUsername('')
setAvatarUrl('')
}


return (
<Layout>
 <section className='w-96 rounded bg-white mx-auto'>
  <form onSubmit={formSubmitHandler}>
   <div className='flex flex-col items-center'>
     
      {isUploading ?
       <MoonLoader size={50} speedMultiplier={.75} color='#4A90E2' />
       :
       <img className={`shadow-xl rounded-full w-16 h-16 -translate-y-4 ${avatar_url ? "opacity-1" : "opacity-0"}`} src={avatar_url && `https://sbybrlsjodbbxrkdbsru.supabase.co/storage/v1/object/public/${avatar_url}`}/>
    }
     <label htmlFor='file' className='mt-2 cursor-pointer bg-darkSky text-white font-bold rounded px-4 py-2 duration-200 hover:opacity-80'>
        Upload avatar
        <input type='file' onChange={fileChangeHandler} className='hidden' id='file' />
     </label>
    </div>
    <div className='mt-5 px-8'>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='Enter your username' className='w-full border border-lightGray p-1 focus:outline-none placeholder:text-sm' />
    </div>
    <div className='mt-5 px-8'>
        <input value={website} onChange={(e)=> setWebsite(e.target.value)} type='url' placeholder='Enter your website' className='w-full border border-lightGray p-1 focus:outline-none placeholder:text-sm' />
    </div>
    <div className='text-center p-5'>
        <button type='submit' className='bg-lightGreen text-black rounded px-5 py-2 font-bold duration-200 hover:opacity-80'>Update</button>
    </div>
  </form>
 </section>
</Layout>
  )
}

export default Profile
