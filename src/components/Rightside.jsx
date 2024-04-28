import { Box } from "@mui/material";
import NestedGrid from "./NestedGrid";
import PropTypes from "prop-types";

const Rightside = ({ Item }) => {
  return (
    <Box gridColumn="span 10">
      <Item sx={{ height: "auto" }}>
        <NestedGrid />
      </Item>
    </Box>
  );
};
Rightside.propTypes = {
  Item: PropTypes.element.isRequired,
};
export default Rightside;
