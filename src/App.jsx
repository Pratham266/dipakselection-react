import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import "./App.css";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the mode to dark
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
      <AllProducts />
    </ThemeProvider>
  );
}

export default App;
