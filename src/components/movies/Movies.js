import {useSelector} from 'react-redux';
import Movie from '../movie/Movie';
import {Plus} from '../../icons';
import { supabase } from '../../supabaseClient';
import { toast } from 'react-toastify';

const Movies = () => {
const {movies} =useSelector(store => store.fetchMovies);

const addToWatchlists = async({poster_path,vote_average,title,id})=>{
try {
const user = supabase.auth.user();

const {data}=await supabase.from('watchlists').select('*').eq('title',title);

if(data.length > 0)return;
const {error}=await supabase.from('watchlists').insert([
{
poster_path,
vote_average,
title,
movie_id:id,
user_id:user?.id
}
],
{returning:"minimal"},
{onConflict:'title'})


if(error){
toast.warning('You\'ve not logged in yet.')
}else{
toast.success('The movie is added to watchlists.')
}
} catch (error) {
throw error.message;
}
}


return (
<div className='grid mx-auto gap-5 mt-10 py-4 grid-cols-1 w-72 sm:w-80 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-auto'>
{
  movies && movies.map((movie)=>{
  return (
  <Movie {...movie} key={movie.id}>
     <button onClick={()=> addToWatchlists({...movie})} className='flex text-darkSky bg-black-800 p-2 w-full justify-center font-bold items-center rounded my-3 transition-all duration-200 ease-ease-in-out hover:opacity-80'>
               <Plus />
           watchlist
      </button>
  </Movie>
  )

  })
}
</div>

  )
}

export default Movies