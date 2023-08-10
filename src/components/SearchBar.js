import React, { useState } from "react";
import { Container, TextField } from "@mui/material";

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
        </form>
      </Container>
    </>
  );
};

export default SearchBar;
