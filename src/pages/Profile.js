import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    // Add update logic here
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleUpdate} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="New Password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
}

export default Profile;
