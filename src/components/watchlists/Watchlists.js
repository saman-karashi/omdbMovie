import {useEffect,useState} from 'react'
import { Minus } from '../../icons';
import Layout from '../layout/Layout';
import Movie from '../movie/Movie';
import {supabase} from '../../supabaseClient';
import { BounceLoader } from 'react-spinners';

const Watchlists = () => {
const [watchlists,setWatchlists]=useState(null);
const [loading,setLoading]=useState(false);

const fetchWatchlists=async()=>{
try {
setLoading(true)
const {data,error} = await supabase.from('watchlists').select('*');

if(error)return;
if(data){
setWatchlists(data);
setLoading(false)
}
} catch (error) {
throw new Error('Opps,it seems something went wrong.')
}
}

useEffect(()=>{
let mounted=true;
if(mounted)fetchWatchlists()
return ()=> mounted=false;
},[])

const removeFromWatchlists = async(id)=>{
try {
const {data,error} = await supabase.from('watchlists').delete().match({id:id});

if(error)console.log(error.message);
if(data)fetchWatchlists()
} catch (error) {
throw error.message;
}
}

if(loading && !watchlists){
return(
<div className='fixed top-1/3 inset-x-1/2 -translate-x-14 md:-translate-x-16'>
  <BounceLoader color='#36D7D1' size={100} loading={loading}/>
</div>
)
}else if(!watchlists || watchlists.length === 0){
return(
<div className='flex justify-center mt-60'>
  <p className='text-base text-white font-bold sm:text-2xl'>No movie is added to watchlists.</p>
</div>
)
}

return (
<Layout>
    <div className='grid gap-5 mt-10 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {watchlists &&
    watchlists.map((watchlist)=>{
    return(
    <Movie {...watchlist} key={watchlist.id}>
      <button onClick={()=> removeFromWatchlists(watchlist.id)} className='flex text-darkSky bg-black-800 p-2 w-full justify-center font-bold items-center rounded my-3 transition-all duration-200 ease-ease-in-out hover:opacity-80'>
            <Minus />
        watchlist
      </button>

    </Movie>
    )
    })
    }
    </div>
</Layout>
  )
}

export default Watchlists