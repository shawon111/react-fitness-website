import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from '../Home/HorizontalScrollbar';
import Loader from '../../layout/Loader';

const SimilarExercises = ({targetMusclleExercises, equipmentExercises}) => {
    return (
        <Box sx={{mt: {lg: '100px', xs: '0'}}}>
            <Typography variant="h3">
                Exercises that target the same muscle group
            </Typography>
            <Stack 
            direction="column" gap="50px" sx={{p: '2', position: 'relative'}}
            >
              {
                targetMusclleExercises.length ? <HorizontalScrollbar data={targetMusclleExercises} isBodyPart={false}/> : <Loader />
              }  
            </Stack>
        </Box>
    );
};

export default SimilarExercises;