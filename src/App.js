import { useState } from 'react';
import './App.css';
import HeroBanner from './component/HeroBanner';
import MainPage from './component/MainPage';
import Navbar from './component/Navbar';
import AuthenticationModal from './component/AuthenticationModal';
function App() {

  const [logedIn, setLoggedIn] = useState(false);
  console.log(logedIn)
  return (
    <div className='relative min-h-screen bg-richblack-900 flex flex-col overflow-x-hidden mb-10'>
        <Navbar setLoggedIn={setLoggedIn}/>
        <HeroBanner/>
        <MainPage/>
        {logedIn && <AuthenticationModal logedIn={logedIn} setLoggedIn={setLoggedIn}/>}
    </div>
  );
}

export default App;
