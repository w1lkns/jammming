import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
import SearchResults from "./components/SearchResults";
import { useEffect, useState } from "react";
//import songs from "./songs";
import Playlist from "./components/Playlist";
import Alert from "@mui/material/Alert";
import { Box, Button } from "@mui/material";

let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
let SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
let URL_REDIRECT_AFTER_AUTH = "http://localhost:3000";
const SCOPE = ["playlist-modify-public"].join(" ");
const expiration = 3600;

//let state = generateRandomString(16);
//SPOTIFY_AUTH_ENDPOINT += '&state=' + encodeURIComponent(state);

SPOTIFY_AUTH_ENDPOINT += "?response_type=token";
SPOTIFY_AUTH_ENDPOINT += "&client_id=" + encodeURIComponent(CLIENT_ID);
SPOTIFY_AUTH_ENDPOINT += "&scope=" + encodeURIComponent(SCOPE);
SPOTIFY_AUTH_ENDPOINT +=
  "&redirect_uri=" + encodeURIComponent(URL_REDIRECT_AFTER_AUTH);
SPOTIFY_AUTH_ENDPOINT += "&expires_in=" + encodeURIComponent(expiration);

const getReturnedPAramsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInURL = stringAfterHashtag.split("&");
  return paramsInURL.reduce((acc, current) => {
    const [key, value] = current.split("=");
    acc[key] = value;
    return acc;
  }, {});
};

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uriPlaylist, setUriPlaylist] = useState([]);

  //console.log(playlistName);

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTH_ENDPOINT}`;
    //console.log(window.location);
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedPAramsFromSpotifyAuth(window.location.hash);
      //console.log({ access_token, expires_in, token_type });

      localStorage.clear();
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_in", expires_in);
      localStorage.setItem("token_type", token_type);
      setIsLoggedIn(true);
    } else {
      setAlertMessage("Please login into your spotify account");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
    }
  }, []);

  const handleSearch = (query) => {
    const accessToken = localStorage.getItem("access_token");

    if (!query.trim()) {
      setSearchResults([]);
      setAlertMessage("Empty query. Please enter a search term.");
      setAlertSeverity("warning");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
      return;
    }

    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      //console.log(response);
      response.json().then((data) => {
        console.log(data.tracks.items);
        const tracks = data.tracks.items;
        setSearchResults(tracks.slice(0, 10));
      });
    });

    /*const results = query
      ? songs.filter((song) =>
          song.name.toLowerCase().includes(query.toLowerCase())
        )
      : songs;
    */
  };

  const addingTrack = (track) => {
    setPlaylistTracks([track, ...playlistTracks]);
    setUriPlaylist([track.uri, ...uriPlaylist]);
    setAlertMessage(`${track.name} added to the playlist!`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  const deleteTrack = (trackToDelete) => {
    //console.log("deleting", trackToDelete);

    const newArray = playlistTracks.filter(
      (track) => track.id !== trackToDelete.id
    );

    //console.log("New array:", newArray);

    setPlaylistTracks(newArray);

    setAlertMessage(`${trackToDelete.name} was deleted from the playlist!`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  const handleSavePlaylist = () => {
    const accessToken = localStorage.getItem("access_token");

    // fetches user's ID
    fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const uid = data.id;

        return fetch(`https://api.spotify.com/v1/users/${uid}/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            name: playlistName,
            description: "Custom playlist generated from webapp by @w1lkns",
            public: true,
          }),
        })
          .then((response) => response.json())
          .then((playlistData) => {
            // Returning uid and playlistData together
            return { uid, playlistData };
          });
      })
      .then(({ uid, playlistData }) => {
        console.log("raw data", playlistData);
        const playlistId = playlistData.id;

        console.log(uriPlaylist);

        return fetch(
          `https://api.spotify.com/v1/users/${uid}/playlists/${playlistId}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              uris: uriPlaylist,
            }),
          }
        );
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from adding tracks
        console.log("Tracks added:", data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("error adding tracks", error.message);
      });
  };

  return (
    <div className="App">
      <Header />
      <Button
        sx={{ mt: 5, mb: 5 }}
        onClick={handleLogin}
        variant="contained"
        color={isLoggedIn ? "success" : "primary"}
      >
        {!isLoggedIn ? "Login to Spotify" : "Connected to Spotify"}
      </Button>
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
          <Alert sx={{ width: "50%" }} severity={alertSeverity}>
            {alertMessage}
          </Alert>
        </Box>
      )}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <SearchResults
            results={searchResults}
            playlistTracks={playlistTracks}
            addTrack={addingTrack}
          />
        </Grid>
        <Grid item xs={4}>
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            uriPlaylist={uriPlaylist}
            deleteTrack={deleteTrack}
            handleSavePlaylist={handleSavePlaylist}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
