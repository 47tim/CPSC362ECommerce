const express = require('express');
const app = express();
const port = 5001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('pages/login.html', {root: __dirname});
});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});