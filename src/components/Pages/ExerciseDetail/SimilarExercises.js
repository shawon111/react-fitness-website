import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from '../../layout/Loader';
import ExerciseSlider from './ExerciseSlider';

const SimilarExercises = ({targetMusclleExercises, equipmentExercises}) => {
    return (
        <Box sx={{mt: {lg: '80px', xs: '0'}}}>
            <Typography variant="h3">
                Exercises that target the same muscle group
            </Typography>
            <Stack 
            direction="column" gap="50px" mt="30px" sx={{p: '2', position: 'relative'}}
            >
              {
                targetMusclleExercises.length ? <ExerciseSlider data={targetMusclleExercises} /> : <Loader />
              }  
            </Stack>
            <Typography variant="h3">
                Exercises that use the same equipments
            </Typography>
            <Stack 
            direction="column" gap="50px" mt="30px" sx={{p: '2', position: 'relative'}}
            >
              {
                equipmentExercises.length ? <ExerciseSlider data={equipmentExercises} /> : <Loader />
              }  
            </Stack>
        </Box>
    );
};

export default SimilarExercises;