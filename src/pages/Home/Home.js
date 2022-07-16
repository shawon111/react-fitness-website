import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../../components/Pages/Home/Exercises';
import HeroBanner from '../../components/Pages/Home/HeroBanner';
import SearchExercises from '../../components/Pages/Home/SearchExercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all')
    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
        </Box>
    );
};

export default Home;