import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState("");

  //console.log(search);

  const handleNewQuery = (e) => {
    let query = e.target.value;
    setSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search)
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 10, pb: 10 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleNewQuery}
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
          <Button type="submit" sx={{ mt: 5, mb: 5 }} variant="outlined">
            Search
          </Button>
        </form>
      </Container>
    </>
  );
};

export default SearchBar;
