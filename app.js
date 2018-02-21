const express = require('express');
const ejs     = require('ejs');
const multer  = require('multer');
const path    = require('path');

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
