import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box p="20px" sx={{ ml: { sm: "50px" }, mt: { xs: "70px", lg: "212px" }, position: "relative" }}>
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { xs: "40px", lg: "44px" } }} mt="30px" mb="23px">
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontFamily="Alegreya" fontSize="22px" lineHeight="35px" mb="25px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <Button href="#exercises" variant="contained" color="error" sx={{ width: "200px", px: "15px", py: "10px", backgroundColor: "#FF2625", borderRadius: "4px", fontFamily: "Alegreya" }} >
                    Explore Exercises
                </Button>
            </Stack>
            <Typography fontSize="220px" fontWeight="600" color="#FF2625" sx={{ opacity: "0.1", display: { xs: "none", md: "block" } }}>Exercise</Typography>
            <img src={HeroBannerImg} alt="HeroBannerLogo" className="hero-banner-img" />
        </Box >
    )
}

export default HeroBanner;