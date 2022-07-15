import { Box } from '@mui/material';
import React from 'react';
import Exercises from '../../components/Pages/Home/Exercises';
import HeroBanner from '../../components/Pages/Home/HeroBanner';
import SearchExercises from '../../components/Pages/Home/SearchExercises';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    );
};

export default Home;