const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'You successfully created a GET route!'});
});


const PORT = process.env.PORT || 5000
app.listen(5000, () => {
    console.log('Simple Server is running on 3000');
});