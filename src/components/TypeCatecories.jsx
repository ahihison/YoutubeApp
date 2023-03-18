import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { typeCategories } from "../utils/constants";
import "./Typecategories.css";
function TypeCatecories() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "auto" },
        flexDirection: { md: "row" },
        overflow: "auto",
        // marginLeft: "-30px",
        marginBottom: "30px",
        display: { md: "flex", sm: "none", xs: "none" },
      }}
    >
      {typeCategories.map((category) => (
        <Box
          sx={{
            marginRight: "12px",
          }}
        >
          <button
            className="button-typecategories"
            style={{
              padding: "12px 12px 12px  12px",
              color: "#fff",
              backgroundColor: "#ffffff1a",
              border: "none",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {category.name}
          </button>
        </Box>
      ))}
    </Stack>
  );
}

export default TypeCatecories;
