import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos, ChanelCard, Navbar, Sidebar } from "./";
import { useEffect, useState } from "react";
import { fectchFromApi } from "../utils/fectchFromApi";
function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fectchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fectchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box min-height="95vh" display="flex">
      <Box>
        <Box>
          <div
            style={{
              backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChanelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
