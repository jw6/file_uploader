const express = require('express');
const ejs     = require('ejs');
const multer  = require('multer');
const path    = require('path');

// Init app
const app = express();

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  } 
});

// Init upload
const upload = multer({
  storage: storage
}).single('myImage');
// EJS
app.set('view engine', 'ejs');

// Public folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      console.log(req.file);
      res.send('test');
    }
  });
});
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
