import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const carouselData = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/blurry-shot-shop_23-2147652279.jpg?t=st=1714227353~exp=1714230953~hmac=a4215a443a17cee96f95a5e0c85e190605e5b3ab3dd30a647719be6892a1abc7&w=1800",
    title: "DipakSelection",
    description: "Discover our latest summer styles.",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/clothing-store-with-blurred-effect_23-2148164804.jpg?t=st=1714227401~exp=1714231001~hmac=8a2950f63eb7eee542513ce780658ffe9271f77a0d4fa34d4b63a7901751221a&w=1800",
    title: "Winter Collection",
    description: "Stay cozy with our winter essentials.",
  },
  // Add more carousel items as needed
];

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Carousel NextIcon={<ChevronRightIcon />} PrevIcon={<ChevronLeftIcon />}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>

            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{ fontSize: "28px", fontWeight: 700 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                style={{ fontSize: "16px", fontWeight: 700 }}
              >
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </Carousel>
    </React.Fragment>
  );
}
