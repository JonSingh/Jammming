const clientID = 'e44f17f6076b4e11b1a3048cbccf5080'
const redirectURI = "http://localhost:3000"


const Spotify ={
    search(term, token) {
        return fetch(`https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=10`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          return response.json()
        }).then(jsonResponse => {
          if (jsonResponse.tracks.items) {
            return jsonResponse.tracks.items.map(track => ({
              id: track.uri,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name
            }));
          }
        });
      },

    save(name, token, playlist) {
      return fetch(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        return jsonResponse.id
      }).then(id => {
        return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
          method: "POST", 
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            public: false
          })
        }
      );
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      return jsonResponse.id
    }).then(id => {
      console.log(playlist)
      return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uris: playlist
        })
      }
    )}).catch(error => console.error('Error: ', error))},


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