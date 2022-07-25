import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import {exerciseOptions, fetchData, youtubeOptions} from '../../utilities/fetchData';
import Detail from '../../components/Pages/ExerciseDetail/Detail';
import ExerciseVideos from '../../components/Pages/ExerciseDetail/ExerciseVideos';
import SimilarExercises from '../../components/Pages/ExerciseDetail/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMusclleExercises, setTargetMusclleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        const fetchExerciseDetailData = async () => {
            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetails(exerciseDetailData)

            const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents)

            const targetMusclleExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMusclleExercises(targetMusclleExerciseData);

            const equipmentExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExerciseData);
        }
        fetchExerciseDetailData();
    }, [id])

    return (
        <Box pt="60px">
            <Detail exerciseDetails={exerciseDetails} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
            <SimilarExercises targetMusclleExercises={targetMusclleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciseDetail;