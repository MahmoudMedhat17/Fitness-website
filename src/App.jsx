import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navbar, ContactUs, Footer } from "./Components/index";
import { Home, ExerciseDetails } from "./Pages/index";
import "./App.css";

function App() {

  return (
    <Box width="400px" sx={{ width: { xl: "1440px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
