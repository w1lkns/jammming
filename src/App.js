import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import songs from "./songs";
import Playlist from "./components/Playlist";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist x Defecto");
  

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
          <Playlist name={playlistName} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
