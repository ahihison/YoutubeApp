import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, TypeCatecories, Videos } from "./";
import { fectchFromApi } from "../utils/fectchFromApi";
import { useEffect, useState } from "react";
import "./Feed.css";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fectchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "calc(100vh - 110px)" },
          borderRight: "1px solid #3d3d3d",
          px: { cx: 0, md: 2 },
          overflow: "auto",
        }}
        className="scroll-nav"
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
            marginBottom: "30px",
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          backgroundColor: "#0f0f0f",
          marginLeft: { md: "60px" },
          height: "calc(100vh - 110px)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Box
          sx={{ display: { md: "none", xs: "none", sm: "none", lg: "flex" } }}
        >
          <TypeCatecories />
        </Box>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
