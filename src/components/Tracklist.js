import React from "react";
import { Button, Container } from "@mui/material";

const Tracklist = () => {
  const handleAdd = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      sx={{ border: 1, borderColor: "#191414", borderRadius: 1 }}
    >
      <h1>Tracklist</h1>
      <form onSubmit={handleAdd}>
        <Button type="submit" sx={{ mt: 5, mb: 5 }} variant="outlined">
          SAVE TO SPOTIFY
        </Button>
      </form>
    </Container>
  );
};

export default Tracklist;
