import React from "react";
import { Container } from "@mui/material";
import Track from "./Track";

const Tracklist = ({ uriPlaylist, playlistTracks, deleteTrack }) => {
  //console.log(playlistTracks);
  //console.log(uriPlaylist);

  return (
    <Container>
      <div>
        {playlistTracks.length === 0 ? (
          <>
            <p>No songs added to the playlist (yet)!</p>
          </>
        ) : (
          playlistTracks.map((song) => (
            <Track
              key={song.id}
              id={song.id}
              name={song.name}
              artist={song.artist}
              uri={song.uri}
              cover={song.cover}
              deleteTrack={deleteTrack}
              showRemoveButton={true}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Tracklist;
