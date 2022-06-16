import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
//import Watchlists from './components/watchlists/Watchlists';

const App = () => {
return (
<BrowserRouter>
<Navbar />
  <Routes>
    <Route index element={<Home />} />
    <Route path='/sign-up' element={<Auth />} />
    <Route path='/profile' element={<Profile />} />
      {/* 
      <Route path='/watchlists' element={<Watchlists />} /> 
      */}
  </Routes>
</BrowserRouter>
)
}

export default App