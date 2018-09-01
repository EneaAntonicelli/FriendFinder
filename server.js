var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = Number(process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use("/css", express.static(__dirname + '/app/public/assets/css'));
app.use("/images", express.static(__dirname + '/app/public/assets/images'));

// require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function () {
	console.log('listening on PORT ' + PORT);
});
