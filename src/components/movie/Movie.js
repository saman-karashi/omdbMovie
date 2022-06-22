import React from 'react'
import {Star} from '../../icons';

const Movie = ({poster_path,title,vote_average,children}) => {
return (
poster_path &&
<article className='bg-black rounded overflow-hidden border border-2 border-black'>
    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} loading='lazy' alt={title} className='h-500 w-500 transition-all duration-200 hover:scale-105'/>
   <div className='p-2'>
       <h1 className='overflow-hidden text-lg my-2 text-ellipsis whitespace-nowrap text-white font-bold'>{title}</h1>
       <span className='text-white flex'>
          <span className='text-yellow mr-2'>
           <Star />
          </span>
          <span className='font-bold'>
            {vote_average}
          </span>
       </span>
       <div>
         {children}
       </div>
   </div>
</article> 
  )
}

export default Movie