/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography, Pagination } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../Pages/Home";
import ExerciseCard from "./ExerciseCard";
import { FetchFromAPI, options } from "../Utils/FetchFromAPI";

const Exercises = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { exercises, setExercises, bodyPart } = useContext(StateContext);
    const exercisesPerPage = 9;
    const indexOflastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOflastExercise - currentPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOflastExercise);

    useEffect(() => {
        const fetchExerciseData = async () => {
            let exercisesData = [];
            if (bodyPart === "all") {
                exercisesData = await FetchFromAPI("https://exercisedb.p.rapidapi.com/exercises", options);
            }
            else {
                exercisesData = await FetchFromAPI(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
            }
            setExercises(exercisesData);
        }
        fetchExerciseData();
    }, [bodyPart]);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: "1800", behavior: "smooth" });
    }

    return (
        <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
            <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "30px", lg: "44px" } }} mb="46px">
                Show Results:
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { xs: "50px", lg: "107px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {
                    currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                }
            </Stack>
            <Stack mt={{ xs: "70px", lg: "114px" }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        size="large"
                        defaultPage={1}
                        shape="rounded"
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises;