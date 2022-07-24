import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Exercises from '../../components/Pages/Home/Exercises';
import HeroBanner from '../../components/Pages/Home/HeroBanner';
import SearchExercises from '../../components/Pages/Home/SearchExercises';
import { exerciseOptions, fetchData } from '../../utilities/fetchData';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all')
    // useEffect(()=>{
    //     loadExerciseData()
        
        
    // }, [])

    // const loadExerciseData = async () => {
    //     const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    //     setExercises(exerciseData)
    // }

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
            exercises={exercises}
            />
        </Box>
    );
};

export default Home;