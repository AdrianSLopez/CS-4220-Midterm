const fs = require('fs/promises');

// Save user searches to local file: history.json
const saveSearch = async (search, resultCount) => {
    try {
        const data = await fs.readFile('history.json');
        const obj = JSON.parse(data);

        obj.push({ search, resultCount });

        fs.writeFile('history.json', JSON.stringify(obj));
    } catch(errror) {
        fs.writeFile('history.json', JSON.stringify( [{ search, resultCount }]));
    }
};

module.exports = {
    saveSearch
};