const yargs = require('yargs/yargs');
const app = require('./app.js');

yargs(process.argv.slice(2))
    .usage('$0: Usage <command>')
    .command('search <track>', 'search for track/song based on name',
    (yargs) => {
        return (yargs.positional('track', {
            describe: 'the track/song to search for',
            type: 'string'            
        }));
    }, 
    (args) => {
        const trackName = args.track.concat(" ".concat(process.argv.splice(4).join(" ")));
        app.search(trackName);
    })
    .help().argv;
