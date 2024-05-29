import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const mockWorkouts = [
  { id: 1, title: 'Cardio Blast', description: 'High-intensity cardio workout.' },
  { id: 2, title: 'Strength Training', description: 'Build muscle with strength training.' },
];

const WorkoutDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workout = mockWorkouts.find(w => w.id === parseInt(id));
  const [alertVisible, setAlertVisible] = useState(false);

  const startWorkout = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
      // Navigate to a workout session page or start the workout logic
      // For demonstration, we will just navigate back to home
      navigate('/Home');
    }, 5000); // Show the alert for 5 seconds
  };

  if (!workout) return <Text>Workout not found</Text>;

  return (
    <Box p={6}>
      <Heading>{workout.title}</Heading>
      <Text mt={4}>{workout.description}</Text>
      <Button mt={4} colorScheme="teal" onClick={startWorkout}>
        Start Workout
      </Button>
      {alertVisible && (
        <Box mt={4} p={3} bg="yellow.200" rounded="md">
          <Text>Starting workout...</Text>
        </Box>
      )}
    </Box>
  );
};

export default WorkoutDetail;



// import { useParams, useHistory } from 'react-router-dom';
// import { Box, Heading, Text, Button } from '@chakra-ui/react';
// import { useState } from 'react';

// const mockWorkouts = [
//   { id: 1, title: 'Cardio Blast', description: 'High-intensity cardio workout.' },
//   { id: 2, title: 'Strength Training', description: 'Build muscle with strength training.' },
// ];

// const WorkoutDetail = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const workout = mockWorkouts.find(w => w.id === parseInt(id));
//   const [alertVisible, setAlertVisible] = useState(false);

//   const startWorkout = () => {
//     setAlertVisible(true);
//     setTimeout(() => {
//       setAlertVisible(false);
//       // Navigate to a workout session page or start the workout logic
//       // For demonstration, we will just navigate back to home
//       history.push('/Home');
//     }, 5000); // Show the alert for 5 seconds
//   };

//   if (!workout) return <Text>Workout not found</Text>;

//   return (
//     <Box p={6}>
//       <Heading>{workout.title}</Heading>
//       <Text mt={4}>{workout.description}</Text>
//       <Button mt={4} colorScheme="teal" onClick={startWorkout}>
//         Start Workout
//       </Button>
//       {alertVisible && (
//         <Box mt={4} p={3} bg="yellow.200" rounded="md">
//           <Text>Starting workout...</Text>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default WorkoutDetail;



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
