const fs = require('fs/promises');

// Save user searches to local file: history.json
const saveSearch = async (search, resultCount) => {

    await fs.readFile('history.json')
    .then((data) => {
        const obj = JSON.parse(data);

        obj.push({ search, resultCount });

        fs.writeFile('history.json', JSON.stringify(obj));
    })
    .catch((error) => {
        fs.writeFile('history.json', JSON.stringify( [{ search, resultCount }]));
    })

};

module.exports = {
    saveSearch
};