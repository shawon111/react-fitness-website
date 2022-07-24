import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import {exerciseOptions, fetchData} from '../../utilities/fetchData';
import Detail from '../../components/Pages/ExerciseDetail/Detail';
import ExerciseVideos from '../../components/Pages/ExerciseDetail/ExerciseVideos';
import SimilarExercises from '../../components/Pages/ExerciseDetail/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const fetchExerciseDetailData = async () => {
            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetails(exerciseDetailData)
        }
        fetchExerciseDetailData();
    }, [id])

    return (
        <Box pt="60px">
            <Detail exerciseDetails={exerciseDetails} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;