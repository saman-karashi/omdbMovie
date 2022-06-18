import {useSelector} from 'react-redux';
import Movies from '../movies/Movies';
import {BounceLoader} from 'react-spinners';
import Layout from '../layout/Layout';
import SearchBar from '../searchBar/SearchBar';

const Home = () => {
const {
loading,
error
} =useSelector(state => state.fetchMovies)

return (
<Layout>
  <section>
    <SearchBar />
      {
        loading &&
        <div className='flex justify-center mt-24'>
          <BounceLoader color='#36D7D1' size={100} loading={loading}/>
        </div>
      }
      {error &&
        <p className='mt-10 text-center text-white font-bold text-2xl'>{error}</p>
      }
        <Movies />
  </section>
</Layout>
)
}

export default Home