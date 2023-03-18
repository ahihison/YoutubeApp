import { Stack, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Decription({ videoDetail }) {
  const [show, setUnShow] = useState("Show more");
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setUnShow(show === "Show more" ? "Hide" : "Show more");
    setToggle(!toggle);
  };

  return (
    <Stack>
      <Box
        width="100%"
        color="#fff"
        sx={{
          backgroundColor: "#272727",
          margin: "12px",
          paddingTop: "20px",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#3f3f3f",
            cursor: "pointer",
          },
        }}
      >
        {toggle ? (
          <Typography
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            paddingRight="20px"
            paddingLeft="20px"
            fontSize="14px"
            fontWeight="400"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
            }}
          >
            {videoDetail?.snippet?.description}
          </Typography>
        ) : (
          <Typography
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            paddingRight="20px"
            paddingLeft="20px"
            fontSize="14px"
            fontWeight="400"
          >
            {videoDetail?.snippet?.description}{" "}
          </Typography>
        )}
        {3 > 2 ? (
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
              paddingLeft: "22px",
              marginBottom: "6px",
            }}
            onClick={handleClick}
          >
            {show}
          </button>
        ) : (
          <></>
        )}
      </Box>
    </Stack>
  );
}

export default Decription;
