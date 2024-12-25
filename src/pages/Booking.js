import React, { useState } from 'react';
import { Container, Box, Typography, Paper, IconButton } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import KingBedIcon from '@mui/icons-material/KingBed';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Booking.css';

function NumberControl({ value, max, min = 1, icon: Icon, label, onChange }) {
  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <Box className="number-control">
      <Box className="number-control-content">
        <Icon className="number-icon" />
        <Typography className="number-label">{label}</Typography>
        <Box className="number-value-container">
          <IconButton size="small" onClick={handleIncrement} className="arrow-button">
            <KeyboardArrowUpIcon />
          </IconButton>
          <Typography className="number-value">{value}</Typography>
          <IconButton size="small" onClick={handleDecrement} className="arrow-button">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
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

        <Box className="controls-container">
          <NumberControl
            value={booking.adults}
            max={4}
            icon={PersonOutlineIcon}
            label="Adults"
            onChange={(value) => setBooking({ ...booking, adults: value })}
          />
          <NumberControl
            value={booking.children}
            max={3}
            min={0}
            icon={ChildCareIcon}
            label="Children"
            onChange={(value) => setBooking({ ...booking, children: value })}
          />
          <NumberControl
            value={booking.beds}
            max={3}
            icon={KingBedIcon}
            label="Beds"
            onChange={(value) => setBooking({ ...booking, beds: value })}
          />
        </Box>

        <button className="browse-button">
          <SearchIcon sx={{ mr: 1 }} />
          Browse Rooms
        </button>
      </Paper>
    </Container>
  );
}

export default Booking;
