import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import Calendar from './pages/Calendar';
import Payment from './pages/Payment';
import RoomDetail from './pages/RoomDetail';
import Services from './pages/Services'; // Import Services page
import './App.css';
import './styles/RoomDetail.css';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <div className="app">
          <div style={{ 
            width: '100%', 
            maxWidth: '390px', 
            height: '844px', 
            margin: '0 auto', 
            border: '1px solid #ddd', 
            borderRadius: '20px', 
            overflow: 'hidden',
            position: 'relative',
            background: '#ffffff',
          }}>
            <div style={{ 
              height: '100%',
              paddingBottom: '65px',
              boxSizing: 'border-box',
              overflowY: 'auto'
            }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/room/:id" element={<RoomDetail />} />
                <Route path="/room-detail" element={<RoomDetail />} />
                <Route path="/services" element={<Services />} /> {/* Added Services route */}
              </Routes>
            </div>
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
