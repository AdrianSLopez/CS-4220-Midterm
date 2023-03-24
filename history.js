const fs = require('fs/promises');

// Save user searches to local file: history.json
const saveSearch = async (search) => {

    await fs.readFile('history.json')
    .then((data) => {
        const obj = JSON.parse(data);

        obj.push({ search, resultCount: 10 });

        fs.writeFile('history.json', JSON.stringify(obj));
    })
    .catch((error) => {
        fs.writeFile('history.json', JSON.stringify( [{search, resultCount: 10 }]));
    })

};

module.exports = {
    saveSearch
};