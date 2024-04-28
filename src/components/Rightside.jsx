import { Box } from "@mui/material";
import NestedGrid from "./NestedGrid";

const Rightside = ({ Item }) => {
  return (
    <Box gridColumn="span 10">
      <Item sx={{ height: "auto" }}>
        <NestedGrid />
      </Item>
    </Box>
  );
};

export default Rightside;
