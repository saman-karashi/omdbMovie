import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Watchlists from './components/watchlists/Watchlists';
import Watchlist from './components/watchlist/Watchlist';

const App = () => {
return (
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route index element={<Home />} />
    <Route path='/sign-in' element={<Auth />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/watchlists' element={<Watchlists />} />
    <Route path='/watchlists/:id' element={<Watchlist />} /> 
  </Routes>
</BrowserRouter>
)
}

export default App