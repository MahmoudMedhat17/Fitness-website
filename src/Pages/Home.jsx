import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../Components/index";
import { useState, createContext } from "react";

export const StateContext = createContext();

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");
    return (
        <Box>
            <HeroBanner />
            <StateContext.Provider value={{ exercises, setExercises, bodyPart, setBodyPart }}>
                <SearchExercises />
                <Exercises />
            </StateContext.Provider>

        </Box>
    )
}

export default Home;