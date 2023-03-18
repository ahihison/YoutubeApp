import { Box, Stack, Typography } from "@mui/material";
import ChanelCard from "./ChanelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || "row"}
    flexWrap="wrap"
    gap={2}
    backgroundColor="#0f0f0f"
  >
    {videos ? (
      videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: "100%", sm: "358px", md: "360px" } }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChanelCard channelDetail={item} />}
          {item.id.playlistId && <VideoCard video={item} />}
        </Box>
      ))
    ) : (
      <Typography>API can't search about that</Typography>
    )}
  </Stack>
);
export default Videos;
