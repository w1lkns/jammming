import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Track({ name, artist, cover }) {
  return (
    <Card
      sx={{
        backgroundColor: "#1DB954",
        color: "#FFF",
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        height: { xs: "auto", sm: "auto" }, // Adjusted to "auto" to accommodate varying text heights
        width: { xs: "100%", sm: 400 },
        margin: { xs: 2, sm: 2 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 151,
          height: 151,
          m: { xs: 2, sm: 2 },
          order: { xs: 2, sm: 1 },
        }}
        image={cover}
        alt={`${name} album cover`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: "1 0 auto",
        }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h6"
            noWrap={false} // Allow wrapping
            overflow="hidden" // Hide overflow
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {artist}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Track;
