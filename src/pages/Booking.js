import React, { useState } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import KingBedIcon from '@mui/icons-material/KingBed';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Booking.css';

function DialControl({ value, max, icon: Icon, label, onChange }) {
  const percentage = (value / max) * 50;
  
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const height = rect.height;
    const newValue = Math.round((y / height) * max);
    onChange(Math.min(Math.max(1, newValue), max));
  };

  return (
    <div className="dial">
      <div 
        className="dial-circle" 
        onClick={handleClick}
        style={{ 
          background: `conic-gradient(from 0deg, #2193b0 0%, #6dd5ed ${percentage}%, #eee ${percentage}%, #eee 100%)`
        }}
      >
        <div className="dial-inner">
          <Icon sx={{ fontSize: 24, color: '#2193b0' }} />
        </div>
      </div>
      <Typography className="dial-value">{value}</Typography>
      <Typography className="dial-label">{label}</Typography>
    </div>
  );
}

function Booking() {
  const [booking, setBooking] = useState({
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    beds: 1
  });

  return (
    <Container maxWidth="sm" className="booking-container">
      <Typography variant="h4" className="booking-title">
        Find Your Perfect Room
      </Typography>

      <Paper elevation={0} className="booking-form">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box className="date-pickers">
            <DatePicker
              label="Check-In"
              value={booking.checkIn}
              onChange={(newValue) => setBooking({ ...booking, checkIn: newValue })}
              slotProps={{ textField: { className: "date-input" } }}
            />
            <DatePicker
              label="Check-Out"
              value={booking.checkOut}
              onChange={(newValue) => setBooking({ ...booking, checkOut: newValue })}
              slotProps={{ textField: { className: "date-input" } }}
            />
          </Box>
        </LocalizationProvider>

        <Box className="dial-container">
          <DialControl
            value={booking.adults}
            max={4}
            icon={PersonOutlineIcon}
            label="Adults"
            onChange={(value) => setBooking({ ...booking, adults: value })}
          />
          <DialControl
            value={booking.children}
            max={3}
            icon={ChildCareIcon}
            label="Children"
            onChange={(value) => setBooking({ ...booking, children: value })}
          />
          <DialControl
            value={booking.beds}
            max={3}
            icon={KingBedIcon}
            label="Beds"
            onChange={(value) => setBooking({ ...booking, beds: value })}
          />
        </Box>

        <button 
          className="browse-button"
          onClick={() => {/* handle search */}}
        >
          <SearchIcon sx={{ mr: 1 }} />
          Browse Rooms
        </button>
      </Paper>
    </Container>
  );
}

export default Booking;
