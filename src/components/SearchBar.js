import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import songs from "../songs";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  const handleNewSearch = (e) => {
    let query = e.target.value;
    setSearch(query);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 10, pb: 10 }}>
        <form>
          <TextField
            onChange={handleNewSearch}
            value={search}
            type="search"
            id="search"
            label="Search"
            sx={{
              width: {
                xs: "100%",
                sm: 600,
              },
            }}
          />
          <br />
          <Button sx={{ mt: 5, mb: 5 }} variant="outlined">
            Search
          </Button>
        </form>
      </Container>
    </>
  );
};

export default SearchBar;
