/* eslint-disable react/prop-types */
import BodyParts from "./BodyParts";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowImg from "../assets/icons/left-arrow.png";
import RightArrowImg from "../assets/icons/right-arrow.png";
import { useContext } from "react";
import ExerciseCard from "./ExerciseCard";


const HorizontalBarScroll = ({ data, isBodyParts }) => {
    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollPrev()} className="left-arrow">
                <img
                    src={LeftArrowImg}
                    alt="LeftArrowImg"
                />
            </Typography>
        )
    }

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollNext()} className="right-arrow">
                <img
                    src={RightArrowImg}
                    alt="RightArrowImg"
                />
            </Typography>
        )
    }

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        {
                            isBodyParts ? <BodyParts item={item} /> : <ExerciseCard exercise={item} />
                        }
                    </Box>
                ))
            }
        </ScrollMenu>
    )
}

export default HorizontalBarScroll;