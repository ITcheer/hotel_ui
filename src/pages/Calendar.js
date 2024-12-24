import { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <DateCalendar
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Available Rooms</Typography>
            {/* Add room availability list here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Calendar;
