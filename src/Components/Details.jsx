import { Stack, Typography, Button } from "@mui/material";
import bodyPartImg from "../assets/icons/body-part.png";
import EquipmentImg from "../assets/icons/equipment.png";
import TargetImg from "../assets/icons/target.png";

const Details = ({ exerciseDetails }) => {

    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetails;

    const exerciseExtraData = [
        {
            icon: bodyPartImg,
            item: bodyPart
        },
        {
            icon: EquipmentImg,
            item: equipment
        },
        {
            icon: TargetImg,
            item: target
        }
    ];

    return (
        <Stack sx={{ flexDirection: { lg: "row" }, p: "20px" }} alignItems="center" gap="20px">
            <img
                src={gifUrl}
                alt="BodyExerciseGif"
                className="detail-image"
                loading="lazy"
            />
            <Stack gap={{ xs: "20px", lg: "35px" }}>
                <Typography variant="h6" fontWeight="700" textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px", lg: "24px" } }} color="#4D4C4C">
                    Exercises keep you strong. {" "}
                    {name} is one of the best exercises to target your {bodyPart}.
                    It will help you improve your mood and gain energy.
                </Typography>
                {
                    exerciseExtraData.map((item) => (
                        <Stack key={item} flexDirection="row" alignItems="center" gap="24px">
                            <Button sx={{ bgcolor: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px" }}>
                                <img
                                    src={item.icon}
                                    alt={item.icon}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </Button>
                            <Typography textTransform="capitalize" sx={{ fontSize: { xs: "20px", lg: "30px" } }}>
                                {item.item}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Details;