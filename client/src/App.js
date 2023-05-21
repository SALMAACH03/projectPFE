import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter ,Routes, Route , Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/home' exact Component={HomeScreen}/>
    <Route path='/book/:roomid' exact Component={BookingScreen}/>
    </Routes>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
