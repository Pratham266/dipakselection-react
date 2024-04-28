import { Box, Paper, styled } from "@mui/material";
import Leftside from "../components/Leftside";
import Rightside from "../components/Rightside";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AllProducts = () => {
  return (
    <Box sx={{ width: 1, mt: 2 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Leftside Item={Item} />
        <Rightside Item={Item} />
      </Box>
    </Box>
  );
};

export default AllProducts;
