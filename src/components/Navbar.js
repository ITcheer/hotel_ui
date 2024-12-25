import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <AppBar position="static" color="primary" className="navbar-container">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/booking">Booking</Button>
        <Button color="inherit" component={Link} to="/room-detail">Rooms</Button>
        <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
        <Button color="inherit" component={Link} to="/payment">Payment</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
