/* eslint-disable react/prop-types */
import "../Components/init";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img
                src={exercise.gifUrl}
                alt={exercise.name}
                loading="lazy"
            />
            <Stack direction="row">
                <Button sx={{ ml: "21px", bgcolor: "#FFA9A9", color: "white", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: "21px", bgcolor: "#FCC757", color: "white", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography color="black" fontWeight="bold" mt="11px" pb="20px" ml="21px" sx={{ fontSize: { xs: "20px", lg: "24px" } }}>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;