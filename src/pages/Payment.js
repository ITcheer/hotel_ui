import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function Payment() {
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePayment = (e) => {
    e.preventDefault();
    // Add payment processing logic here
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handlePayment} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Card Number"
          value={payment.cardNumber}
          onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Expiry Date"
          placeholder="MM/YY"
          value={payment.expiryDate}
          onChange={(e) => setPayment({ ...payment, expiryDate: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="CVV"
          value={payment.cvv}
          onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2, bgcolor: '#1976d2' }}>
          Complete Payment
        </Button>
      </Box>
    </Container>
  );
}

export default Payment;
