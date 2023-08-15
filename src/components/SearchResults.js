import { Container } from "@mui/material";
import Track from "./Track";
import React from "react";

const SearchResults = ({ results, playlistTracks, addTrack }) => {
  //console.log(results);
  return (
    <Container
      sx={{
        border: 1,
        borderColor: "#191414",
        borderRadius: 1,
        backgroundColor: "#D0F0C0",
      }}
    >
      <h1>Search Results</h1>
      <div>
        {results.length === 0 ? (
          <>
            <p>No results for search!</p>
          </>
        ) : (
          results.map((song) => (
            <Track
              key={song.id}
              id={song.id}
              name={song.name}
              artist={song.artists[0].name}
              cover={song.album.images[1].url}
              uri={song.artists[0].uri}
              addSong={addTrack}
              showAddButton={true}
              isInPlaylist={playlistTracks.some(
                (track) => track.id === song.id
              )}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
