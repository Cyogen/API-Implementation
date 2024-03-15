const express = require('express');
const fs = require('fs');
const app = express();

const quotesFilePath = 'private/quotes.txt';

app.get('/random-quote', (req, res) => {
    fs.readFile(quotesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading quotes file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const quotes = data.split('\n');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        res.send(randomQuote);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
