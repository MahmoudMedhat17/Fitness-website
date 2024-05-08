import { Details, ExerciseVideo, SimilarExercises } from "../Components/index";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchFromAPI, options, youtubeOptions } from "../Utils/FetchFromAPI";
import { useState, useEffect } from "react";

const ExerciseDetails = () => {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const [exerciseYoutubeVids, setExerciseYoutubeVids] = useState([]);
    const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
    const [equipmentExercise, setEquipementExercise] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseDetailsData = async () => {
            // URL for ExerciseDB API
            const exerciseDbUrL = "https://exercisedb.p.rapidapi.com";

            //URL for Youtube search recommended videos to the main Exercise video
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

            //Fetch data from ExerciseDB and save it to var to save it to the state then use the state to pass it to the components that gonna contain the Exercise Details.
            const exerciseDetailsData = await FetchFromAPI(`${exerciseDbUrL}/exercises/exercise/${id}`, options);
            setExerciseDetails(exerciseDetailsData);

            //Fetch data from Youtube search API that fetches data according to the data we fetched earlier from the ExerciseDB API so we get recommended videos related to the main video commin from the ExerciseDB and save it to a state then pass this state to component where we use it there
            const exerciseYoutubeData = await FetchFromAPI(`${youtubeSearchUrl}/search?&query=${exerciseDetailsData.name}`, youtubeOptions);
            setExerciseYoutubeVids(exerciseYoutubeData.contents);

            //Fetching Target muscles for the similar Exercises from ExerciseDB API
            const targetExercisesData = await FetchFromAPI(`${exerciseDbUrL}/exercises/target/${exerciseDetails.target}`, options);
            setTargetMuscleExercise(targetExercisesData);

            //Fetching Equipement required for the muscles from ExerciseDB API that we will use to dispaly them in similar Equipement category
            const equipmentExercisesData = await FetchFromAPI(`${exerciseDbUrL}/exercises/equipment/${exerciseDetails.equipment}`, options);
            setEquipementExercise(equipmentExercisesData);
        }
        //We call the fetchFunction
        fetchExerciseDetailsData();
        //This use Effect changes according to the changes of the ID of the exercise
    }, [id]);

    return (
        <Box>
            <Details exerciseDetails={exerciseDetails} />
            <ExerciseVideo exerciseYoutubeVids={exerciseYoutubeVids} name={exerciseDetails.name} />
            <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} />
        </Box>
    )
}

export default ExerciseDetails;