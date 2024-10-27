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
  id,
  name,
  artist,
  cover,
  uri,
  addSong,
  deleteTrack,
  showAddButton,
  showRemoveButton,
  isInPlaylist,
}) {
  const handleAddTrack = () => {
    addSong({ id, name, artist, cover, uri });
  };
  const handleDeleteTrack = () => {
    deleteTrack({ id, name, artist, cover, uri });
  };

  return (
    <Card
      sx={{
        backgroundColor: "#1DB954",
        color: "#FFF",
        display: "flex",
        alignItems: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
        height: { xs: "auto", sm: "auto", md: "auto" },
        width: { xs: "auto", sm: "auto", md: 525 },
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
            sx={{
              maxWidth: 300,
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem' },
              overflowWrap: "break-word",
              wordBreak: "break-word",
              hyphens: "auto"
            }}
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
                  onClick={handleAddTrack}
                  style={{ color: "white" }}
                  size="small"
                  endIcon=<AddCircleIcon />
                ></Button>
              )}
              {showRemoveButton && (
                <Button
                  onClick={handleDeleteTrack}
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
