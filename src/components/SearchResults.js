import { Container } from "@mui/material";
import Track from "./Track";
import React from "react";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <Container
      sx={{ border: 1, borderColor: "#191414", borderRadius: 1 }}
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
              name={song.name}
              artist={song.artist}
              cover={song.cover}
              showAddButton={true}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
