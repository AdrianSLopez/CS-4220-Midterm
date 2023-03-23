const prompts = require('prompts')
const api = require('./api.js');

// filter data for each track
const _filterRecTrackInfo = (tracks) => {
    return tracks.map((track) => {
        const id = track.data.id;
        const artists = track.data.artists.items.map((artist) => {
            return artist.profile.name
        }).join(", ");
        const title = `${track.data.name} by ${artists}`;

        return {id, track: title}
    });
};

const _displayTracks = async (tracks) => {
    const displayTracks = tracks.map((track) => {
        return { title: `${track.track}`, value:track};
    })
    
    return await prompts([{
        type: 'select',
        name: 'tracks',
        message: 'select track to view more informatoin',
        choices: displayTracks
    }])
}


const get = async (trackName) => {
    console.log(`Fetching 10 potential track`);
    const tracks = await api.getTracks(trackName);

    //flters info for every recommended track
    const filteredRecTrackInfo = _filterRecTrackInfo(tracks);

    const chosenTrack = await _displayTracks(filteredRecTrackInfo);

    const trackInfo = await api.getTrackInfo(chosenTrack.tracks);

    // Todo: 
        // Display Track Info:
            // Ex:
                // [Track title] by [Artist(s)]
                // Track [track_number] From [Album title]
                // Released in [release_date]
                // 

        // implement [option] for user to choose the maximum amount of reccomendations
}

module.exports = {
    get
}