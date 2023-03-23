const api = require('./api.js');

// filter data for each track
const _filterTrackInfo = (tracks) => {
    return tracks.tracks.map((track) => {
        const trackId = track.data.id;
        const artists = track.data.artists.items.map((artist) => {
            return artist.profile.name
        }).join(", ");
        const title = `${track.data.name} by ${artists}`;

        return {trackId, track: title}
    });
};

const get = async (trackName) => {
    console.log(`Fetching 10 potential track`);
    const tracks = await api.getTracks(trackName);

    //flters info for every track
    const filteredTrackInfo = _filterTrackInfo(tracks)

    console.log(filteredTrackInfo)
    // Todo: 
        // display tracks to user with option to choose a track
        // On track selection, display more track information by makeing another api call 

        // implement [option] for user to choose the maximum amount of reccomendations
}

module.exports = {
    get
}