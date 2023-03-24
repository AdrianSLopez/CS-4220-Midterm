const prompts = require('prompts')
const api = require('./api.js');
const { saveSearch } = require('./history.js');

// filter data for each recommended track
const _filterRecTrackInfo = (tracks) => {
    return tracks.map((track) => {
        const id = track.data.id;
        const artists = track.data.artists.items.map((artist) => {
            return artist.profile.name
        }).join(", ");
        const name = `${track.data.name} by ${artists}`;

        return {id, name}
    });
};

// filter chosen track's information
const _filterTrackInfo = (track) => {
    return track.map((trackInfo) => {
        const albumInfo = `Track ${trackInfo.track_number} from album titled ${trackInfo.album.name}`;
        const releaseDate = `Released in ${trackInfo.album.release_date}`
        const time = `${((trackInfo.duration_ms)/60000).toFixed(2)} minutes`
        return {albumInfo, releaseDate, time: time.replace('.', ':')};
    });
};

// display list of tracks related to user search
const _displayTracks = async (tracks) => {
    const displayTracks = tracks.map((track) => {
        return { title: `${track.name}`, value:track};
    });
    
    return await prompts([{
        type: 'select',
        name: 'tracks',
        message: 'select track to view more informatoin',
        choices: displayTracks
    }]);
};

const search = async (trackName, resultLimit) => {
    // api requests a list of tracks based on user search and resultLimit
    const tracks = await api.getTracks(trackName, resultLimit);
    
    // save user searches and number of results returned by api request
    await saveSearch(trackName, tracks.length);

    // filters info for every recommended track
    const filteredRecTrackInfo = _filterRecTrackInfo(tracks);

    // Display list of tracks related to user search
    const chosenTrack = await _displayTracks(filteredRecTrackInfo);
    
    // api requests more info based on track chosen by user
    const trackInfo = await api.getTrackInfo(chosenTrack.tracks.id);

    // filter chosen track info
    const filteredTrackInfo =_filterTrackInfo(trackInfo.data.tracks);
   
    // Display track information
    console.log('\t\x1b[32m%s\x1b[0m', chosenTrack.tracks.name);
    console.log('\t\x1b[32m%s\x1b[0m', filteredTrackInfo[0].albumInfo);
    console.log('\t\x1b[32m%s\x1b[0m', filteredTrackInfo[0].releaseDate);
    console.log('\t\x1b[32m%s\x1b[0m', filteredTrackInfo[0].time);
}

module.exports = {
    search
}