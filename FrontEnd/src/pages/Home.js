import { Box, SimpleGrid } from '@chakra-ui/react';
import WorkoutCard from '../components/WorkoutCard';

const mockWorkouts = [
  { id: 1, title: 'Cardio Blast', description: 'High-intensity cardio workout.' },
  { id: 2, title: 'Strength Training', description: 'Build muscle with strength training.' },
];

const Home = () => (
  <Box p={6}>
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
      {mockWorkouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </SimpleGrid>
  </Box>
);

export default Home;
