import { Box } from "@mui/material";
import DropdownItems from "./DropdownItems";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import PropTypes from "prop-types";

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

Leftside.propTypes = {
  Item: PropTypes.element.isRequired,
};
export default Leftside;
