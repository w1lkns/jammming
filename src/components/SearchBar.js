import React, { useState } from "react";
import { Container, TextField } from "@mui/material";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  const handleNewSearche = (e) => {
    let query = e.target.value;
    setSearch(query);
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{ pt: 10, pb: 10 }}
      >
        <form>
          <TextField
            onChange={handleNewSearche}
            value={search}
            type="search"
            id="search"
            label="Search"
            sx={{ width: 600 }}
          />
        </form>
      </Container>
    </>
  );
};

export default SearchBar;
