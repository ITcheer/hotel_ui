import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import HotelIcon from '@mui/icons-material/Hotel';
import PaymentIcon from '@mui/icons-material/Payment';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      className="bottom-nav"
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        value="/login"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Booking"
        value="/booking"
        icon={<BookIcon />}
      />
      <BottomNavigationAction
        label="Rooms"
        value="/calendar"
        icon={<HotelIcon />}
      />
      <BottomNavigationAction
        label="Payment"
        value="/payment"
        icon={<PaymentIcon />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
