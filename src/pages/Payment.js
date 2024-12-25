import { Container, Box, Typography, Paper, Divider, Button } from '@mui/material';
import alipayLogo from '../styles/alipay.png';
import wechatLogo from '../styles/wechat.png';

function Payment() {
  // Example booking details
  const booking = {
    roomType: 'Three Bedroom Suite',
    checkIn: '2024-03-20',
    checkOut: '2024-03-23',
    nights: 3,
    pricePerNight: 468,
    guests: 4,
    subtotal: 1404,
    tax: 70.20,
    serviceFee: 50,
    total: 1524.20
  };

  return (
    <Container sx={{ py: 3, height: '100%', overflowY: 'auto' }}>
      <Typography variant="h5" sx={{ 
        mb: 3, 
        fontWeight: 600,
        color: '#2193b0'
      }}>
        Booking Summary
      </Typography>

      <Paper sx={{ 
        p: 2, 
        mb: 3, 
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {booking.roomType}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Check-in: {booking.checkIn}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check-out: {booking.checkOut}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Guests: {booking.guests}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ '& > div': { mb: 1.5 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>¥{booking.pricePerNight} × {booking.nights} nights</Typography>
            <Typography>¥{booking.subtotal}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Tax (5%)</Typography>
            <Typography>¥{booking.tax}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Service fee</Typography>
            <Typography>¥{booking.serviceFee}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mb: 2,
          fontWeight: 600
        }}>
          <Typography variant="h6">Total (CNY)</Typography>
          <Typography variant="h6">¥{booking.total}</Typography>
        </Box>
      </Paper>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Payment Method
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Paper 
          sx={{ 
            flex: 1,
            p: 2,
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }
          }}
        >
          <img 
            src={alipayLogo} 
            alt="Alipay" 
            style={{ 
              height: '40px',
              objectFit: 'contain',
              marginBottom: '8px'
            }} 
          />
          <Typography>Alipay</Typography>
        </Paper>

        <Paper 
          sx={{ 
            flex: 1,
            p: 2,
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }
          }}
        >
          <img 
            src={wechatLogo} 
            alt="WeChat Pay" 
            style={{ 
              height: '40px',
              objectFit: 'contain',
              marginBottom: '8px'
            }} 
          />
          <Typography>WeChat Pay</Typography>
        </Paper>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          py: 1.5,
          backgroundColor: '#2193b0',
          '&:hover': {
            backgroundColor: '#1c7a8e'
          }
        }}
      >
        Confirm Payment
      </Button>
    </Container>
  );
}

export default Payment;
