document.getElementById('getQuoteBtn').addEventListener('click', getQuote);

function getQuote() {
    fetch('private/quotes.txt')
    .then(response => response.text())
    .then(text => {
        const quotes = text.split('\n');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        document.getElementById('quoteDisplay').textContent = randomQuote;
    })
    .catch(error => {
        console.error('Error fetching quotes:', error);
    });
}
