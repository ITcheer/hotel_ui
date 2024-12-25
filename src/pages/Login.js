import { Box, Container, Paper, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import '../styles/Login.css';

function Login() {
  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{ 
        height: '100%',
        maxWidth: 'var(--container-width)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box className="login-container">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            className="hotel-title"
          >
            Welcome to Hotel Orestra
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            className="subtitle"
          >
            Experience luxury and comfort at its finest
          </Typography>
        </Box>

        <Box className="cards-container">
          <Paper 
            elevation={0}
            className="login-card guest"
            onClick={() => {/* handle guest login */}}
          >
            <PublicIcon className="icon" />
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" className="card-title">
                Guest Login
              </Typography>
              <Typography variant="body1" color="text.secondary" className="card-description">
                Book your stay and manage reservations
              </Typography>
            </Box>
          </Paper>

          <Paper 
            elevation={0}
            className="login-card staff"
            onClick={() => {/* handle staff login */}}
          >
            <PersonIcon className="icon" />
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" className="card-title">
                Staff Login
              </Typography>
              <Typography variant="body1" color="text.secondary" className="card-description">
                Access administrative dashboard
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
