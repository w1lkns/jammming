# Spotify Playlist Generator

Spotify Playlist Generator is a React application that allows users to search for songs, create playlists, and save them to Spotify.

## Features

- **Search Bar**: Users can search for songs by entering the query in the search bar.
- **Search Results**: Displays the search results and allows users to add songs to their playlist.
- **Playlist Creation**: Users can create a custom playlist by adding their favorite tracks from the search results.
- **Playlist Modification**: Tracks can be removed from the playlist at any time.
- **Save to Spotify**: Users can save their custom playlist directly to Spotify.
- **Responsive Design**: The application is optimized for various screen sizes and devices.

## Components Overview

### Header
The Header component displays the application's title and navigation menu.

### SearchBar
This component provides a text input field for users to enter their search query and a button to initiate the search.

### SearchResults
Displays the search results, allowing users to add songs to their playlist. It also provides feedback if no results are found for a search query.

### Tracklist
The Tracklist component displays the current playlist tracks, allowing users to remove tracks as needed.

### Track
A reusable component that represents a single track. It can be used in both the search results and playlist to show details of a track and allow adding or removing it.

### Playlist
Allows users to view and manage their custom playlist, including naming the playlist and saving it to Spotify.

## Tech Stack

- **React**: Utilizes functional components and hooks.
- **Material-UI**: Used for styling and layout.

## API Key Setup

To connect to the Spotify API, you'll need to generate an API key. Follow these steps:

1. Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Create a new application and obtain the `Client ID` and `Client Secret`.
3. Create a `.env` file in the root of your project and add the following lines:

```env
REACT_APP_SPOTIFY_CLIENT_ID=Your-Client-ID-Here

Replace Your-Client-ID-Here with your actual credentials.

## Installation and Running

1. Clone the repository.
2. Install dependencies using \`npm install\`.
3. Run the development server using \`npm start\`.

## Conclusion

Spotify Playlist Generator is a feature-rich and responsive application that provides a seamless experience for creating and managing playlists. It demonstrates effective use of React and Material-UI for building a user-friendly interface.

Contributions and feedback are welcome!
