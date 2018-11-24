const clientID = 'e44f17f6076b4e11b1a3048cbccf5080'
const redirectURI = "http://localhost:3000"


const Spotify ={
    search(term, token) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?q=name:${term}&type=album,artist,track&limit=5`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          if (jsonResponse.tracks.items) {
            return jsonResponse.tracks.items.map(track => ({
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name
            }));
          }
        });
      },

    save() {},

    getAccessToken() {
        const tokenFromURL = window.location.href.match(/access_token=([^&]*)/)
        //const expiryFromURL = window.location.href.match(/expires_in=([^&]*)/)
        if (tokenFromURL){
            //window.location = redirectURI
            return tokenFromURL[1]            
        }
        else {
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-private&redirect_uri=${redirectURI}`
            window.location = url
            return tokenFromURL[1]
        }
    }



}

export default Spotify