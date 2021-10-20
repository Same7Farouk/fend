// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const port = 3000;

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {
  console.log('Example app listening at http://localhost:' + port);
});


// GET data method route
app.get('/data', function (req, res) {
  console.log('the response will send all data: '+ JSON.stringify(projectData));
  res.send(projectData);
});

// POST method route
app.post('/', function (req, res) {

  projectData['temperature'] = req.body.temperature;
  projectData['date'] = req.body.date;
  projectData['user_response'] = req.body.user_response;

  console.log('app has stored the data: '+ JSON.stringify(projectData));
  res.send();
})
