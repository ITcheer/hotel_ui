import { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2, bgcolor: '#1976d2' }}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
