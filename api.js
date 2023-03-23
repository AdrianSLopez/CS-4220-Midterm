const axios = require("axios");
const base = 'https://spotify81.p.rapidapi.com';
const headers = {
    'X-RapidAPI-Key': '21db31a7camsh2254351ad0b2dcfp1130e0jsn294348c23b20',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  };

// get track reccommendation based on user input
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

        return tracks.data
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getTracks
}