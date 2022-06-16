import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Search } from '../../icons';
import Movies from '../movies/Movies';
import { fetchMoviesHandler } from '../../features/fetchMoviesSlice';
import {BounceLoader} from 'react-spinners';
import Layout from '../layout/Layout';


const Home = () => {
const [search,setSearch]=useState('')
const dispatch = useDispatch();
const {
movies,
loading,
error
} =useSelector(state => state.fetchMoviesReducer)


const formSubmitHandler = (e)=>{
e.preventDefault();

dispatch(fetchMoviesHandler(search))

setSearch('')
}

  return (
  <Layout>
    <section>
        <div className="container mx-auto">
        <form onSubmit={formSubmitHandler} className='w-96 mx-auto' >
            <div className='relative'>
                <button type='submit' htmlFor="search" className='text-darkGray absolute right-0 translate-y-1/3 -translate-x-1/2'>
                   <Search />
                </button>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} id='search' type='text' placeholder='Search...' className='w-full p-2 rounded-full focus:outline-none'/>
            </div>
        </form>
        {loading &&
         <div className='flex justify-center mt-16'>
           <BounceLoader color='#36D7D1' size={100} loading={loading}/>
         </div>
        }

        {error &&
         <p className='mt-10 text-center text-white font-bold text-2xl'>{error}</p>
        }

        <div className='grid gap-5 mt-10 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {/* <Movies /> */}
         {movies && movies.map((movie)=>{
            return <Movies {...movie} key={movie.id}/>
         })}
        </div>
      
        </div>
    </section>
  </Layout>
  )
}

export default Home