import { Stack, Box, Typography } from "@mui/material";
import HorizontalBarScroll from "./HorizontalBarScroll";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
    return (
        <Box sx={{ mt: { xs: "0", lg: "100px" }, p: "20px" }}>
            <Typography variant="h3" mb="30px">
                Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>Target Muscles</span> exercises
            </Typography>
            <Stack direction="row" sx={{ position: "relative", p: "2" }}>
                {
                    targetMuscleExercise.length !== 0 ?
                        <HorizontalBarScroll data={targetMuscleExercise} />
                        : <Loader />
                }
            </Stack>
            <Typography variant="h3" mb="30px">
                Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ position: "relative", p: "2" }}>
                {
                    equipmentExercise.length !== 0 ?
                        <HorizontalBarScroll data={equipmentExercise} />
                        : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises;