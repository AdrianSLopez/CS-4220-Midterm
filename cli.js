const yargs = require('yargs/yargs');
const app = require('./app.js');

yargs(process.argv.slice(2))
    .usage('$0: Usage <command>')
    .command('search <track>', 'search for track/song based on name',
    (yargs) => {
        return (
            yargs
                .positional('track', {
                    describe: 'the track/song to search for',
                    type: 'string'            
                })
                .options('limit', {
                    alias: 'l',
                    describe: 'Limit the number of search results',
                    default: 10
                })
        );
    }, 
    (args) => {
        // remove search, leaving the rest of the track name in args["_"]
        args["_"].shift();
        
        const userTrackInput = args.track + " " + args["_"].join(" ");

        app.search(userTrackInput, args.limit);
    })
    .help().argv;
