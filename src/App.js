import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5}>
          <SearchResults />
        </Grid>
        <Grid item xs={5}>
          <Tracklist />
        </Grid>
      </Grid>
      <Track />
    </div>
  );
}

export default App;
