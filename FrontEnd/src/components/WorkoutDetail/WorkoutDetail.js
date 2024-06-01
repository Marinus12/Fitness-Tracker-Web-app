import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetail = () => (
  <div className="workout-wrapper">
    <h2>4 Week Fat Loss Workout</h2>
    <div>
      <p>Trainer: Jane Doe</p>
      <p>Duration: 35 minutes</p>
      <p>Target Part: Full body</p>
    </div>
  </div>
);

export default WorkoutDetail;



// import { useParams } from 'react-router-dom';
// import { Box, Heading, Text } from '@chakra-ui/react';

// const mockWorkouts = [
//   { id: 1, title: 'Cardio Blast', description: 'High-intensity cardio workout.' },
//   { id: 2, title: 'Strength Training', description: 'Build muscle with strength training.' },
// ];

// const WorkoutDetail = () => {
//   const { id } = useParams();
//   const workout = mockWorkouts.find(w => w.id === parseInt(id));

//   if (!workout) return <Text>Workout not found</Text>;

//   return (
//     <Box p={6}>
//       <Heading>{workout.title}</Heading>
//       <Text mt={4}>{workout.description}</Text>
//     </Box>
//   );
// };

// export default WorkoutDetail;


