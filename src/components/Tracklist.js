import React from "react";
import { Container } from "@mui/material";
import Track from "./Track";

const Tracklist = ({ songs }) => {
  //console.log(songs);

  return (
    <Container>
      <div>
        {songs.length === 0 ? (
          <>
            <p>No songs in the playlist!</p>
          </>
        ) : (
          songs.map((song) => (
            <Track
              key={song.id}
              name={song.name}
              artist={song.artist}
              cover={song.cover}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Tracklist;
