import { Link } from "react-router-dom";

import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from "../utils/constants";
function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "360px" },
        boxShadow: "none",
        borderRadius: 0,
        height: "303px",
        backgroundColor: "#0f0f0f",
      }}
    >
      <Box sx={{ borderRadius: "12px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} width="100%">
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: { xs: "100%", sm: "358px", md: "300" },
              height: 203,

              borderRadius: "12px",
              objectFit: "cover",
            }}
          ></CardMedia>
        </Link>
      </Box>

      <CardContent
        sx={{ backgroundColor: "#0f0f0f", height: "106px", width: "100%" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "ray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
