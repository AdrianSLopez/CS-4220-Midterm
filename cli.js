const yargs = require('yargs/yargs');
const app = require('./app.js');

yargs(process.argv.slice(2))
    .usage('$0: Usage <command>')
    .command('search <track>', 'search for track/song',
    (yargs) => {
        return (yargs.positional('track', {
            describe: 'the track to search for',
            type: 'string'            
        }));
    }, 
    (args) => {
        const trackName = args.track.concat(" ".concat(process.argv.splice(4).join(" ")));
        app.get(trackName);
    })
    .help().argv;
