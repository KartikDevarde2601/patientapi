const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Api-starter-file-main', 'nft-data', 'data', 'nft-users.json');

const nfts = JSON.parse(fs.readFileSync(filePath));

app.get('/api/v1/device', (req, res) => {
    res.status(200).json({
        status: "success",
        data: { nfts }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('App running on port ${port}...');
});