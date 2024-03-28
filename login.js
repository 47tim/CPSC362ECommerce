const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.sendFile('pages/login.html', {root: __dirname});
});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});
  