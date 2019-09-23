const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

// send the user to index html page inspite of the url

app.get('/*',(req, res) => {
  let url = path.join(__dirname, 'public', 'index.html');
  if (!url.startsWith('/app/')) // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

app.listen(process.env.PORT);