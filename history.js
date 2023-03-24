const fs = require('fs/promises');

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