import { Box } from "@mui/material";
import DropdownItems from "./DropdownItems";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const Leftside = ({ Item }) => {
  return (
    <Box gridColumn="span 2">
      <Item sx={{ height: "auto" }}>
        <DropdownItems />
        <IndeterminateCheckbox />
      </Item>
    </Box>
  );
};

export default Leftside;
