import { Stack, Box, Typography } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF3F4">
            <Stack alignItems="center" gap="40px" px="40px" pt="24px">
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "200px", height: "41px" }}
                />
                <Typography variant="h5" mt="20px" sx={{ fontSize: { xs: "20px", lg: "28px" } }} pb="40px" textAlign="center">
                    Made with ❤️ by Mahmoud Medhat
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer;