import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Calendar from './pages/Calendar';
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{ width: '390px', height: '844px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '20px', overflow: 'hidden' }}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
