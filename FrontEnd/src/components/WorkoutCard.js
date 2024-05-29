import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => (
  <Box p={5} shadow="md" borderWidth="1px" rounded="md">
    <Heading fontSize="xl">{workout.title}</Heading>
    <Text mt={4}>{workout.description}</Text>
    <Link to={`/workout/${workout.id}`}>
      <Button mt={4} colorScheme="teal">View Details</Button>
    </Link>
  </Box>
);

export default WorkoutCard;
