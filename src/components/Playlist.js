import { Container, Button } from "@mui/material";
import React from "react";
import Tracklist from "./Tracklist";

const Playlist = ({ name }) => {
  const tracks = [
    {
      id: 1,
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷ (Deluxe)",
      cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      id: 2,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    },
    {
      id: 3,
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      cover: "https://i.scdn.co/image/ab67616d0000b273cd25ce73e3eddeedb995fcee",
    },
  ];

  const [playlistTracks, setPlaylistTracks] = ([tracks])

  const handleAdd = (e) => {
    e.preventDefault();
  };

  

  return (
    <Container sx={{ border: 1, borderColor: "#191414", borderRadius: 1 }}>
      <h1>{name}</h1>
      <h4>
        <Tracklist songs={playlistTracks} />
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
