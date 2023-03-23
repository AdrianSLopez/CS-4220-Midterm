const axios = require("axios");
const base = 'https://spotify81.p.rapidapi.com';
const headers = {
    'X-RapidAPI-Key': '21db31a7camsh2254351ad0b2dcfp1130e0jsn294348c23b20',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  };

// get list of tracks related to user search input
const getTracks = async (name) => {
    const options = {
      method: 'GET',
      url: `${base}/search`,
      params: {q:`${name}`, type: 'tracks', limit: '10'},
      headers
    };
    
    try {
        // returns 7 potential tracks that user is searching for
        const tracks = await axios.request(options);

        return tracks.data.tracks
    } catch (error) {
        console.error(error);
    }
}

// get info for specific track
const getTrackInfo = async (id) => {
    const options = {
        method: 'GET',
        url: `${base}/tracks`,
        params: {ids: `${id}`},
        headers
    }
    
    try {
        const trackInfo = await axios.request(options);

        return trackInfo;
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getTracks,
    getTrackInfo
}