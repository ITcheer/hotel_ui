import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Booking() {
  const [booking, setBooking] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1
  });

  const handleSearch = () => {
    // Add search logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h2>Make a Booking</h2>
        <DatePicker
          label="Check-In Date"
          value={booking.checkIn}
          onChange={(newValue) => setBooking({ ...booking, checkIn: newValue })}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
        <DatePicker
          label="Check-Out Date"
          value={booking.checkOut}
          onChange={(newValue) => setBooking({ ...booking, checkOut: newValue })}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
        <TextField
          select
          fullWidth
          margin="normal"
          label="Number of Guests"
          value={booking.guests}
          onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
        >
          {[1,2,3,4].map(num => (
            <MenuItem key={num} value={num}>{num} Guests</MenuItem>
          ))}
        </TextField>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearch}
          sx={{ maxWidth: 200 }}
        >
          Search Available Rooms
        </Button>
      </Box>
    </Container>
  );
}

export default Booking;
