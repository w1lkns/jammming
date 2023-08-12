import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Track({
  name,
  artist,
  cover,
  showAddButton,
  showRemoveButton,
  isInPlaylist,
}) {
  return (
    <Card
      sx={{
        backgroundColor: "#1DB954",
        color: "#FFF",
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        height: { xs: "auto", sm: "auto", md: "auto" },
        width: { xs: "auto", sm: "auto", md: "auto" },
        margin: { xs: 1, sm: 2, md: 2 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 151,
          height: 151,
          m: { xs: 2, sm: 2 },
          order: { xs: 2, sm: 1 },
          display: { xs: "none", sm: "none", md: "block" },
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
          <Typography>
            <Box mt={3}>
              {!isInPlaylist && showAddButton && (
                <Button
                  style={{ color: "white" }}
                  size="small"
                  endIcon=<AddCircleIcon />
                ></Button>
              )}
              {showRemoveButton && (
                <Button
                  style={{ color: "white" }}
                  size="small"
                  endIcon=<RemoveCircleIcon />
                ></Button>
              )}
            </Box>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Track;
