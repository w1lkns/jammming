import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import songs from "./songs";
import Playlist from "./components/Playlist";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

function App() {
  const tracks = [
    {
      id: 1,
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷ (Deluxe)",
      cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      id: 2,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    },
    {
      id: 3,
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      cover: "https://i.scdn.co/image/ab67616d0000b273cd25ce73e3eddeedb995fcee",
    },
  ];

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist x Defecto");
  const [playlistTracks, setPlaylistTracks] = useState(tracks);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSearch = (query) => {
    const results = query
      ? songs.filter((song) =>
          song.name.toLowerCase().includes(query.toLowerCase())
        )
      : songs;

    setSearchResults(results);
  };

  const addingTrack = (track) => {
    setPlaylistTracks([track, ...playlistTracks]);
    setAlertMessage(`${track.name} added to the playlist!`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const deleteTrack = (track) => {
    setPlaylistTracks([track, ...playlistTracks]);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {showAlert && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "10px",
          }}
        >
          <Alert sx={{ width: "50%" }} severity="success">
            {alertMessage}
          </Alert>
        </Box>
      )}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5}>
          <SearchResults
            results={searchResults}
            playlistTracks={playlistTracks}
            addTrack={addingTrack}
          />
        </Grid>
        <Grid item xs={5}>
          <Playlist name={playlistName} playlistTracks={playlistTracks} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
