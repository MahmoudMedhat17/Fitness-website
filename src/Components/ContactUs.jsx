import { Box, Typography, Stack } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
    return (
        <Box sx={{ height: "100vh" }} mt="50px">
            <Stack height="100vh" width="100%" display="flex" sx={{ flexDirection: { xs: "column", lg: "row" } }} justifyContent="space-around" alignItems="center">
                <Stack gap="40px" >
                    <Typography color="#3A1212" variant="h5">
                        Golds GYM
                    </Typography>
                    <Typography variant="h5" color="#3A1212" display="flex" alignItems="center" gap="10px">
                        Cairo, EG <LocationOnIcon color="black" />
                    </Typography>
                    <Typography variant="h5" color="#3A1212">
                        +201012107269
                    </Typography>
                    <Typography variant="h5" color="#3A1212">
                        m7moooud.17@gmail.com
                    </Typography>
                </Stack>
                <Stack width="30%">
                    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <label htmlFor="Name" style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "sans-serif" }}>Enter Your Name</label>
                        <input type="text" style={{ height: "50px", padding: "5px" }} placeholder="Enter Your Name" />
                        <label htmlFor="email" style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "sans-serif" }}>Enter Your Email</label>
                        <input type="text" style={{ height: "50px", padding: "5px" }} placeholder="Enter Your Email" />
                        <label htmlFor="phoneNo" style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "sans-serif" }}>Enter Your Phone</label>
                        <input type="text" style={{ height: "50px", padding: "5px" }} placeholder="Enter Your Phone" />
                        <label htmlFor="Message" style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "sans-serif" }}>Enter Your Message</label>
                        <textarea type="text" style={{ resize: "vertical", padding: "5px" }} placeholder="Enter Your Message" />
                    </form>
                    <button style={{ width: "30%", marginTop: "10px", cursor: "pointer", fontWeight: "bold", padding: "5px" }}>Submit</button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ContactUs;