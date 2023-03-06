import { Box, Stack } from "@mui/material";
import ChanelCard from "./ChanelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || "row"}
    flexWrap="wrap"
    justifyContent="start"
    gap={2}
  >
    {videos.map((item, idx) => (
      <Box key={idx} sx={{}}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChanelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
);
export default Videos;
