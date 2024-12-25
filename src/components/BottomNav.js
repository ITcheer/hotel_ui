import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(_, newValue) => {
        navigate(newValue);
      }}
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: '1px solid #eee'
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Booking"
        value="/booking"
        icon={<BookIcon />}
      />
      <BottomNavigationAction
        label="Calendar"
        value="/calendar"
        icon={<CalendarMonthIcon />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
