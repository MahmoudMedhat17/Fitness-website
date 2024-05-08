/* eslint-disable react/prop-types */
import { Box, Typography, Stack } from "@mui/material";


const ExerciseVideo = ({ exerciseYoutubeVids, name }) => {
    if (!exerciseYoutubeVids) return "Loading...";
    return (
        <Box sx={{ marginTop: { xs: "20px", lg: "200px" } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: "#FF2625", textTransform: "capitalize" }}>{name}</span> exercise videos
            </Typography>
            <Stack
                justifyContent="start"
                alignItems="center"
                flexWrap="wrap"
                sx={{ flexDirection: { lg: "row" }, gap: { xs: "0", lg: "110px" } }}
            >
                {
                    exerciseYoutubeVids?.slice(0, 6).map((item) => (
                        <a
                            key={item.channelId}
                            className="exercise-video"
                            target="_blank"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        >
                            <img
                                src={item.video.thumbnails[0].url}
                                alt={item.video.title}
                            />
                            <Box>
                                <Typography variant="h5" color="black">
                                    {item.video.title.slice(0, 15)}
                                </Typography>
                                <Typography variant="h6" color="black" sx={{ opacity: "0.8" }} >
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))
                }
            </Stack>
        </Box >
    )
}

export default ExerciseVideo;