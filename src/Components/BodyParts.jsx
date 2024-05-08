import { Stack, Typography } from "@mui/material";
import { StateContext } from "../Pages/Home";
import { useContext } from "react";
import logo from "../assets/icons/gym.png";

const BodyParts = ({ item }) => {

    const { bodyPart, setBodyPart } = useContext(StateContext);

    return (
        <Stack
            type="button"
            justifyContent="center"
            alignItems="center"
            className="bodyPart-card"
            sx={
                bodyPart === item ? {
                    borderTop: "4px solid #FF2625",
                    backgroundColor: "white",
                    borderBottomLeftRadius: "20px",
                    width: "270px",
                    height: "280px",
                    gap: "47px",
                    cursor: "pointer"
                }
                    :
                    {
                        backgroundColor: "white",
                        borderBottomLeftRadius: "20px",
                        width: "270px",
                        height: "280px",
                        gap: "47px",
                        cursor: "pointer"
                    }
            }
            onClick={() => setBodyPart(item)}
        >
            <img
                src={logo}
                alt="logo"
                style={{ width: "40px", height: "40px" }}
            />
            <Typography fontWeight="bold" fontSize="24px" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
                {
                    item
                }
            </Typography>
        </Stack>
    )
}

export default BodyParts;