const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});


app.get('/', (req, res) => {
    res.send('Hello World!!');
  });