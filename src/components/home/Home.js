import React from 'react';
import search from '../../assets/search-icon.png'

const Home = () => {
  return (
    <section className='mt-16'>
        <div className="container mx-auto">
        <form className='w-96 mx-auto'>
            <div className='relative'>
                <label htmFor="search" className='cursor-pointer absolute right-0 translate-y-1/3 -translate-x-1/2'>
                    <img src={search}/>
                </label>
                <input type='text' placeholder='Search...' className='w-full p-2 rounded-full focus:outline-none'/>
            </div>
        </form>

        </div>
    </section>
  )
}

export default Home