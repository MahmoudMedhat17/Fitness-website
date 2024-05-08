import { Stack, Typography, Button, Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { FetchFromAPI, options } from "../Utils/FetchFromAPI";
import HorizontalBarScroll from "./HorizontalBarScroll";
import { useContext } from "react";
import { StateContext } from "../Pages/Home";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const { setExercises } = useContext(StateContext);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const fetchBodyParts = await FetchFromAPI("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", options);
      setBodyParts(["all", ...fetchBodyParts]);
    }
    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await FetchFromAPI("https://exercisedb.p.rapidapi.com/exercises", options);
      const searchedExerciseData = exerciseData.filter((exercise) => (
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)
      ))
      setSearch("");
      setExercises(searchedExerciseData);
      window.scrollTo({ top: "1800", left: "100", behavior: "smooth" });
    }
  }

  return (
    <Stack mt="37px" p="20px" justifyContent="center" alignItems="center">
      <Typography fontWeight="700" sx={{ fontSize: { xs: "30px", lg: "44px" }, mb: "50px" }} textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            height: "76px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: {
              xs: "350px",
              lg: "1000px"
            },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          type="text"
          placeholder="Search Exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button className="search-btn" sx={{ position: "absolute", right: 0, bgcolor: "#FF2625", color: "white", textTransform: "none", height: "56px", fontSize: { xs: "14px", lg: "20px" }, width: { xs: "80px", lg: "117px" } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ width: "100%", position: "relative", p: "20px" }}>
        <HorizontalBarScroll data={bodyParts} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises;