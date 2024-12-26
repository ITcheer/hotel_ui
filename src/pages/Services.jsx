import { Container, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import '../styles/services.css';

function Services() {
  const services = [
    {
      icon: <LocalParkingIcon fontSize="large" />,
      title: 'Car Parking',
      description: 'Parking is free for members.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&q=80',
      highlight: 'Free for Members'
    },
    {
      icon: <RestaurantIcon fontSize="large" />,
      title: 'Restaurant & Dining',
      description: 'Experience authentic cuisine with our in-house chefs.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80',
      highlight: '24/7 Service'
    },
    {
      icon: <StorefrontIcon fontSize="large" />,
      title: 'Campus Store',
      description: 'Convenience store stocked with essentials and snacks.',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80',
      highlight: 'Daily Essentials'
    },
    {
      icon: <RoomServiceIcon fontSize="large" />,
      title: 'Room Service',
      description: 'Order food and amenities directly to your room.',
      image: require('../styles/1.png'),
      highlight: 'Quick Delivery'
    }
  ];

  return (
    <Container className="services-container">
      <Box className="services-header">
        <Typography variant="h4" className="services-title">
          Our Services
        </Typography>
        <Typography variant="subtitle1" className="services-subtitle">
          Enhancing your campus stay experience
        </Typography>
      </Box>

      <Box className="services-grid">
        {services.map((service, index) => (
          <Card key={index} className="service-card">
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box className="service-card-media-container" sx={{ flex: '0 0 200px' }}>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <Box className="service-highlight">
                  {service.highlight}
                </Box>
              </Box>
              <CardContent className="service-content" sx={{ flex: 1 }}>
                <Box className="service-icon-title">
                  {service.icon}
                  <Typography variant="h6">{service.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
