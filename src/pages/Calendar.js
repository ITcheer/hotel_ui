import { Container, Typography, Box, Card, CardMedia, Grid, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import oneBedroomImg from '../styles/1.png';
import twoBedroomImg from '../styles/2.png';
import threeBedroomImg from '../styles/3.png';

const rooms = [
  {
    id: 1,
    name: 'One Bedroom',
    price: '¥198',
    image: oneBedroomImg,
    amenities: ['Single Bed', 'Wi-Fi', 'AC'],
    description: 'Cozy single room perfect for individual students.',
    category: 'Student & Scholar',
    location: 'East Campus',
    rating: 4.7,
    reviews: 256,
    facilities: ['Study Desk', 'Wardrobe', 'TV', 'Shared Bathroom'],
    fullDescription: 'Comfortable single bedroom designed for students, featuring essential amenities and a quiet study environment. Ideal for focused academic stays.'
  },
  {
    id: 2,
    name: 'Two Bedroom',
    price: '¥298',
    image: twoBedroomImg,
    amenities: ['Twin Beds', 'Wi-Fi', 'AC', 'Desk'],
    description: 'Spacious room with two beds, perfect for sharing.',
    category: 'Student & Scholar',
    location: 'West Campus',
    rating: 4.8,
    reviews: 198,
    facilities: ['Study Area', 'Wardrobe', 'TV', 'Private Bathroom'],
    fullDescription: 'Perfect for roommates or visiting scholars, this two-bedroom setup offers comfort and privacy with shared living space.'
  },
  {
    id: 3,
    name: 'Three Bedroom Suite',
    price: '¥468',
    image: threeBedroomImg,
    amenities: ['Multiple Beds', 'Wi-Fi', 'AC'],
    description: 'Large suite ideal for families or groups.',
    category: 'Family & Alumni',
    location: 'North Campus',
    rating: 4.6,
    reviews: 150,
    facilities: ['Living Area', 'Wardrobes', 'TV', 'Private Bathroom'],
    fullDescription: 'Spacious three-bedroom suite perfect for family stays or small groups. Features comfortable beds and modern amenities.'
  }
];

function AvailableRooms() {
  const navigate = useNavigate();

  const handleRoomClick = (room) => {
    navigate(`/room/${room.id}`, { state: { roomData: room } });
  };

  return (
    <Container sx={{ py: 2, height: '100%', overflowY: 'auto' }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 2,
          fontWeight: 600,
          color: '#2193b0',
        }}
      >
        Campus Accommodation
      </Typography>

      {['Student & Scholar', 'Faculty', 'Family & Alumni'].map((category) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: 1,
              fontWeight: 500,
              color: '#666',
              borderBottom: '2px solid #f0f0f0',
              paddingBottom: 1
            }}
          >
            {category}
          </Typography>
          
          <Grid container spacing={2}>
            {rooms
              .filter(room => room.category === category)
              .map((room) => (
                <Grid item xs={12} key={room.id}>
                  <Card 
                    sx={{ 
                      display: 'flex',
                      borderRadius: 2,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }
                    }}
                    onClick={() => handleRoomClick(room)}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 100, objectFit: 'cover' }}
                      image={room.image}
                      alt={room.name}
                    />
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      flex: 1, 
                      p: 1.5,
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          mb: 0.5 
                        }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            {room.name}
                          </Typography>
                          <Typography 
                            sx={{ 
                              fontWeight: 600,
                              color: '#2193b0',
                              fontSize: '1rem'
                            }}
                          >
                            {room.price}
                            <Typography 
                              component="span" 
                              sx={{ 
                                fontSize: '0.75rem',
                                color: '#666',
                                ml: 0.5
                              }}
                            >
                              /night
                            </Typography>
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            fontSize: '0.8rem',
                            mb: 1,
                            lineHeight: 1.3
                          }}
                        >
                          {room.description}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 0.5, 
                        flexWrap: 'wrap'
                      }}>
                        {room.amenities.map((amenity, index) => (
                          <Chip
                            key={index}
                            label={amenity}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              height: '20px',
                              '& .MuiChip-label': {
                                fontSize: '0.7rem',
                                px: 1
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default AvailableRooms;
