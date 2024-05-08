import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <Stack direction="row" justifyContent="space-around" px="20px" sx={{ gap: { xs: "40px", sm: "123px" }, mt: { xs: "20px", sm: "32px" } }}>
            <Link to={"/"}>
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "48px", height: "48px", margin: "0 20px" }}
                />
            </Link>
            <Stack direction="row" gap="40px" alignItems="center" fontSize="24px" fontFamily="Alegreya">
                <Link to={"/"} style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
                    Home
                </Link>
                <Link to={"/contact"} style={{ textDecoration: "none", color: "#3A1212" }}>
                    Contact Us
                </Link>
            </Stack>
        </Stack >
    )
}

export default Navbar;