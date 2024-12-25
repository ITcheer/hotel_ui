import { Box, Typography, Paper, IconButton, Container, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import StarIcon from '@mui/icons-material/Star';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from 'react-router-dom';
import roomImage from '../styles/asset.jpg';  // Add this import

function RoomDetail() {
  const navigate = useNavigate();

  return (
    <Box className="room-detail-container">
      <Box className="hero-image-container">
        <img
          src={roomImage}  // Change this line
          alt="Room"
          className="hero-image"
        />
        <IconButton 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Price Card */}
        <Box className="price-card">
          <Box className="price-card-content">
            <Typography variant="h6" className="hotel-name">Roys Luxury</Typography>
            <Box className="location">
              <LocationOnIcon sx={{ fontSize: 20 }} />
              <Typography>Jakarta</Typography>
            </Box>
            <Typography className="price">$150<span>/night</span></Typography>
          </Box>
          <Box className="dots">
            <span></span><span></span><span></span>
          </Box>
        </Box>
      </Box>

      <Container>
        <Box className="facilities-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Facilities</Typography>
          <Typography className="see-all">See all <span>→</span></Typography>
        </Box>

        <Grid container spacing={1} justifyContent="space-around" className="facilities-grid">
          {[
            { icon: <BedIcon />, label: '2 bed' },
            { icon: <WifiIcon />, label: 'Wi-fi' },
            { icon: <RestaurantIcon />, label: 'Breakfast' },
            { icon: <AcUnitIcon />, label: 'AC' },
            { icon: <PoolIcon />, label: 'Pool' }
          ].map((facility, index) => (
            <Grid item key={index}>
              <Box className="facility-item">
                <Paper className="facility-icon" elevation={0}>
                  {facility.icon}
                </Paper>
                <Typography className="facility-label">
                  {facility.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className="description-section">
          <Typography variant="h6" className="section-title" sx={{ fontWeight: 'bold' }}>
            Property Description
          </Typography>
          
          <Box className="rating">
            <StarIcon sx={{ color: '#FFC700' }} />
            <Typography>4.9 (10.653 Reviews)</Typography>
          </Box>

          <Typography className="description-text">
            If you want to live in a world full of luxuries then Roys Luxury is perfect choice for you. 
            Escape to a world of relaxation at Roy's Luxury Hotel, where...
            <span className="see-more">See all</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default RoomDetail;
