import { Container, Button, TextField } from "@mui/material";
import { React, useState } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({ name, playlistTracks, deleteTrack }) => {
  const [listName, setListName] = useState();
  const handleAdd = (e) => {
    e.preventDefault();
  };

  const handleNewPlaylistName = (e) => {
    const newName = e.target.value;
    //console.log(newName);
    setListName(newName);
  };

  return (
    <Container sx={{ border: 1, borderColor: "#191414", borderRadius: 1 }}>
      <h1>
        <TextField
          onChange={handleNewPlaylistName}
          type="text"
          id="standard-basic"
          label="Playlist Name"
          variant="standard"
          value={listName}
        />
      </h1>
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
