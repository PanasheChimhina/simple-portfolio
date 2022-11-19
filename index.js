const express = require('express');


const app = express();
app.use('/public', express.static(process.cwd() + '/public'));

// Index page (static HTML)
app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/views/portfolio.html');
    });

// 404 Not Found Middleware
app.use(function (req, res, next) {
    res.status(404)
        .type('text')
        .send('Not Found');
});

const portNum = process.env.PORT || 3005;

// Start our server and tests!
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
});

module.exports = app; // For testing
