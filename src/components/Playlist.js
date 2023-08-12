import { Container, Button } from "@mui/material";
import { React } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({id, name, playlistTracks, deleteTrack }) => {
  const handleAdd = (e) => {
    e.preventDefault();
  };

  return (
    <Container sx={{ border: 1, borderColor: "#191414", borderRadius: 1 }}>
      <h1>{name}</h1>
      <h4>
        <Tracklist songs={playlistTracks} deleteTrack={deleteTrack} />
      </h4>
      <form onSubmit={handleAdd}>
        <Button type="submit" sx={{ mt: 5, mb: 5 }} variant="outlined">
          SAVE TO SPOTIFY
        </Button>
      </form>
    </Container>
  );
};

export default Playlist;
