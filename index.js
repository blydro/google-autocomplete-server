const cors = require('micro-cors')()
const fetch = require('node-fetch');

const handler = async (req, res) => {
    const request = req.url.split('q=')[1];
    const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${request}`)
    res.end(await response.buffer());
};

module.exports = cors(handler)
