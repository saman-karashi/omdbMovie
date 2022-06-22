import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {Star,ChevronLeft} from '../../icons';
import { fetchMovieById } from '../../features/fetchMovieByIdSlice';
import { BounceLoader } from 'react-spinners';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper'
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';


const Watchlist = () => {
const dispatch = useDispatch();
const [isPlaying,setIsPlaying] = useState(false);
const {
movie,
loading,
error
}=useSelector((state)=> state.fetchMovieByIdReducer)
const {id:movie_id} = useParams();
const navigate = useNavigate()

useEffect(()=>{
dispatch(fetchMovieById({movie_id}))
},[])


if(loading){
return(
<div className='fixed top-1/3 inset-x-1/2 -translate-x-14 md:-translate-x-16'>
    <BounceLoader color='#36D7D1' size={100} loading={loading}/>
</div>
)
} 

if(error){
return(
<div className='flex justify-center mt-60'>
    <p className='text-base text-white font-bold sm:text-2xl'>{error}</p>
</div>
)
}

return (
  <div className='container mx-auto mt-16 h-full'>
      <button onClick={()=> navigate(-1)} className='ml-2 font-bold mb-10 flex items-center text-white bg-zinc-900 rounded p-2 hover:opacity-90 md:ml-0'>
        <ChevronLeft />
         Back
      </button>
      {
        movie?.videos?.results.length !== 0 ?
      <Swiper
       navigation={true}
       loop={true}
       modules={[Navigation]}
       onSlideChange={()=> setIsPlaying(false)}
       className="h-96 md:h-500"
      >
        {movie?.videos?.results?.map(({id,key})=>{
        return (
        <SwiperSlide key={id}>
            {({isDuplicate})=>{
            if(!isDuplicate){
            return (
            <ReactPlayer
            width={'100%'}
            height={'100%'}
            playing={isPlaying}
            onPause={()=> setIsPlaying(false)}
            onPlay={()=> setIsPlaying(true)}
            volume={1}
            url={`https://www.youtube.com/watch?v=${key}&&rel=0`}
            config={
              {
                youtube:{
                  embedOptions:{
                    host:'https://www.youtube-nocookie.com'
                  }
                }
              }
            }
            >
            </ReactPlayer> 
            )
            }
          }}

        </SwiperSlide>
       )
       })} 
      </Swiper>
      :
      <div className='text-center my-24'>
        <p className='text-white font-bold text-xl md:text-2xl'>No trailers were found for this specific movie.</p>
      </div>
      }

       <div className='px-2 flex-col flex items-center md:flex-row mt-5'>
        <img loading='lazy' className='w-32 border-2 border-slate-900 self-start' src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title}/>
           <div className='md:ml-2'>
           <h1 className='my-2 text-white font-bold text-xl md:text-2xl'>{movie?.title}</h1>
           <div className='flex my-2 flex-wrap'>
              <span className='text-yellow flex items-center'>
                    <Star />
                    <span className='ml-2 font-bold'>
                    {movie?.vote_average}
                    </span>
                  </span>
                {movie?.genres?.map(({id,name})=>{
                return(
                  <span key={id} className='font-bold text-sm my-2 mx-2 bg-black-800 rounded px-2 py-1 text-white whitespace-nowrap'>
                    {name}
                  </span>
                )
                })}
           </div>
          
          <p className='leading-6 text-white w-full md:w-500'>{movie?.overview}</p>
           </div>
       </div>
  </div>
  )
}

export default Watchlist