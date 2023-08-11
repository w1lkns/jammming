import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import { useState } from "react";
import songs from "./songs";

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = query 
      ? songs.filter(song => song.name.toLowerCase().includes(query.toLowerCase())) 
      : songs;

    setSearchResults(results);
  }


  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5}>
          <SearchResults results={searchResults} />
        </Grid>
        <Grid item xs={5}>
          <Tracklist />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
