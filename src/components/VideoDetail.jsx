import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Avatar, TextField } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Decription, Videos } from "./";
import { fectchFromApi } from "../utils/fectchFromApi";
import { useEffect, useState } from "react";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  useEffect(() => {
    fectchFromApi(`videos?part=snippet,statistic&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fectchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
    fectchFromApi(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => setComments(data.items));
    // fectchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
    //   setChannelDetail(data?.items[0])
    // );
  }, [id]);

  useEffect(() => {
    if (videoDetail?.snippet?.channelId) {
      fectchFromApi(
        `channels?part=snippet&id=${videoDetail?.snippet?.channelId}`
      ).then((data) => setChannelDetail(data?.items[0]));
    }
  }, [videoDetail?.snippet?.channelId]);

  if (!videoDetail?.snippet) return "Loading......";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      minHeight="95vh"
      mr={{ md: "32px" }}
      ml={{ md: "60px" }}
      sx={{ overflowY: "auto" }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box width="100%">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              mt={{ md: "20px" }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Box display="flex">
                  <Avatar
                    src={channelDetail?.snippet?.thumbnails?.high?.url}
                    alt="avt"
                    sx={{ marginRight: "10px" }}
                  />
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                    sx={{ marginTop: "10px", fontWeight: "bold" }}
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Box>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

            <Decription videoDetail={videoDetail} />
          </Box>
          {/* Render comment */}
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="cetner"
            alignContent="cetner"
            flexWrap="wrap"
          >
            <Box display="flex" gap={2} mb="32px">
              <Avatar
                alt="user"
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="standard"
                placeholder="Enter your comment..."
                InputProps={{
                  sx: {
                    "&::placeholder": {
                      color: "white",
                    },
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "white",
                    },
                    "&.Mui-focused": {
                      borderColor: "white",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "16px",
                  },
                }}
              />
            </Box>
            {comments ? (
              comments.map((item, idx) => {
                return (
                  <Box display="flex" mb="20px" key={idx}>
                    <Box mr="16px">
                      <Avatar
                        sx={{ mt: "6px" }}
                        alt={idx}
                        src={
                          item?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl
                        }
                      />
                    </Box>
                    <Box>
                      <Typography
                        color="#fff"
                        fontSize="14px"
                        fontWeight="bold"
                      >
                        {
                          item?.snippet?.topLevelComment?.snippet
                            ?.authorDisplayName
                        }
                      </Typography>
                      <Typography
                        color="#fff"
                        maxWidth="1000px"
                        display="flex"
                        flexWrap="wrap"
                        fontSize="14px"
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item?.snippet?.topLevelComment?.snippet?.textDisplay}
                      </Typography>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <>Loading....</>
            )}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="cetner"
          alignContent="cetner"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
