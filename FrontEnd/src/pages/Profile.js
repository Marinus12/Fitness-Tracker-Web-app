import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Profile = () => (
  <Box p={6}>
    <Heading>User Profile</Heading>
    <Text mt={4}>Name: John Doe</Text>
    <Text>Email: john.doe@example.com</Text>
    <Text>Joined: January 1, 2023</Text>
    <Link to="/workout/:id">
      <button>Continue Workout</button>
    </Link>
  </Box>
);

export default Profile;
