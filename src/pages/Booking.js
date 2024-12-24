import { useState } from 'react';
import { Container, TextField, Button, MenuItem, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

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
      <Box sx={{ mt: 4 }}>
        <DatePicker
          label="Check-in Date"
          value={booking.checkIn}
          onChange={(date) => setBooking({ ...booking, checkIn: date })}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
        <DatePicker
          label="Check-out Date"
          value={booking.checkOut}
          onChange={(date) => setBooking({ ...booking, checkOut: date })}
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
        <Button fullWidth variant="contained" onClick={handleSearch} sx={{ mt: 2 }}>
          Search Available Rooms
        </Button>
      </Box>
    </Container>
  );
}

export default Booking;
