import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box color="white" fontWeight="bold">Fitness App</Box>
      <Flex>
        <NavLink to="/" exact>
          <Link px={2} color="white">Home</Link>
        </NavLink>
        <NavLink to="/profile">
          <Link px={2} color="white">Profile</Link>
        </NavLink>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
