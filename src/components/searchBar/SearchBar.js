import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Search } from '../../icons';
import {fetchMovies} from '../../features/fetchMoviesSlice';

const SearchBar = () => {
const [search,setSearch]=useState('')
const dispatch = useDispatch()

const formSubmitHandler = (e)=>{
e.preventDefault();

if(search){
dispatch(fetchMovies(search))
}

setSearch('')
}

return (
<form onSubmit={formSubmitHandler} className='w-80 mx-auto md:w-96' >
    <div className='relative'>
        <button type='submit' htmlFor="search" className='text-darkGray absolute right-2 top-2 '>
           <Search />
        </button>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} id='search' type='text' placeholder='Search...' className='w-full p-2 rounded-full focus:outline-none md:text-base md:placeholder:text-base'/>
    </div>
</form>
  )
}

export default SearchBar