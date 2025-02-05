const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
    const url = 'http://localhost:3000/artist?name_like=${searchTerm}'
    fetch(url)
        .then((response)) 
}