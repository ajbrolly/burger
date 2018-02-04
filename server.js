var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3306;

var app = express();

// Serve content fror the app from 'assets' folder
app.use(express.static('assets'));

// Parse application x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set up Handlebars
var handle = require('express-handlebars');

app.engine('handlebars', handle({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
var routes = require('./controllers/burgers_controller.js') ;

app.use(routes)

app.listen(PORT, function() {
    console.log('App is now listening at localhost: ' + PORT);
});