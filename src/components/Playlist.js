import { Container, Button, TextField } from "@mui/material";
import { React } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({
  playlistName,
  setPlaylistName,
  playlistTracks,
  deleteTrack,
  uriPlaylist,
}) => {
  const handleAdd = (e) => {
    e.preventDefault();
  };

  const handleNewPlaylistName = (e) => {
    const newName = e.target.value;
    //console.log(newName);
    setPlaylistName(newName);
  };

  return (
    <Container
      sx={{
        border: 1,
        borderColor: "#191414",
        borderRadius: 1,
        backgroundColor: "#D0F0C0",
      }}
    >
      <h1>
        <TextField
          onChange={handleNewPlaylistName}
          type="text"
          id="standard-basic"
          label="Playlist Name"
          variant="standard"
          value={playlistName}
        />
      </h1>
      <h4>
        <Tracklist
          uriPlaylist={uriPlaylist}
          playlistTracks={playlistTracks}
          deleteTrack={deleteTrack}
        />
      </h4>
      <form onSubmit={handleAdd}>
        <Button
          type="submit"
          
          sx={{ mt: 5, mb: 5 }}
          variant="contained"
        >
          SAVE TO SPOTIFY
        </Button>
      </form>
    </Container>
  );
};

export default Playlist;
