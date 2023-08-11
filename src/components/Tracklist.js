import React from "react";
import { Button, Container } from "@mui/material";

const Tracklist = () => {
  return (
    <Container sx={{ border: 1, borderColor: "secondary.main", borderRadius: 1 }}>
      <h1>Tracklist</h1>
      <form>
        <Button type="submit" sx={{ mt: 5, mb: 5 }} variant="outlined">
          SAVE TO SPOTIFY
        </Button>
      </form>
    </Container>
  );
};

export default Tracklist;
