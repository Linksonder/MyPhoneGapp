//The following requires are installed modules
var express = require('express')
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/ChatDb');

//Let's make an app!
var app = express();
var hbs =  exphbs.create({defaultLayout: 'main'});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



//The following requires are custom modules
var rooms = require('./routes/rooms'); 
var users = require('./routes/users');
var index = require('./routes/index'); 
app.use('/', index);
app.use('/rooms', rooms);
app.use('/users', users);


//Start the app

app.listen(8081, function() {
  console.log('%s listening at %s', app.name, app.url);
});