import { Box, Typography, Paper, IconButton, Container, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import TvIcon from '@mui/icons-material/Tv';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CheckIcon from '@mui/icons-material/Check';
import { useLocation, useNavigate } from 'react-router-dom';
import roomImage from '../styles/asset.jpg';  // Add this import

function RoomDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const room = location.state?.roomData;

  // Fallback if no room data is provided
  if (!room) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Room not found</Typography>
        <Button onClick={() => navigate('/calendar')}>
          Back to Available Rooms
        </Button>
      </Box>
    );
  }

  return (
    <Box className="room-detail-container">
      <Box className="hero-image-container">
        <img
          src={room.image}
          alt={room.name}
          className="hero-image"
        />
        <IconButton 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box className="content-container">
        <Box className="room-info-card">
          <Typography className="room-name">{room.name}</Typography>
          <Box className="room-location">
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <Typography>{room.location}</Typography>
          </Box>
          <Typography className="room-price">
            {room.price}<span>/night</span>
          </Typography>
        </Box>

        <Typography className="section-title">Facilities</Typography>
        <Box className="facilities-grid">
          {room.facilities.map((facility, index) => (
            <Box key={index} className="facility-item">
              <Box className="facility-icon">
                {getFacilityIcon(facility)}
              </Box>
              <Typography className="facility-label">
                {facility}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box className="rating-container">
          <StarIcon sx={{ color: '#FFC700' }} />
          <Typography className="rating-value">{room.rating.toFixed(1)}</Typography>
          <Typography className="rating-count">({room.reviews} reviews)</Typography>
        </Box>

        <Typography className="section-title">About this room</Typography>
        <Typography className="description-text">
          {room.fullDescription}
        </Typography>
      </Box>
    </Box>
  );
}

// Helper function to get appropriate icon for each facility
function getFacilityIcon(facility) {
  switch (facility) {
    case 'Wi-Fi': return <WifiIcon />;
    case 'AC': return <AcUnitIcon />;
    case 'Study Desk': return <DesktopWindowsIcon />;
    case 'TV': return <TvIcon />;
    case 'Private Bathroom': return <BathtubIcon />;
    case 'Wardrobe': return <CheckroomIcon />;
    default: return <CheckIcon />;
  }
}

export default RoomDetail;
