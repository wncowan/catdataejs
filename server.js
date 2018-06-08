// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/cats', function(request, response) {
    response.render("cats.ejs");
})

app.get('/cuddles', function(request, response) {
  var favorite_arr = [{food:"Spaghetti", toy:"ball"},
  {food:"Fish", toy:"ping pong"},
  {food:"Cake", toy:"golf"}];
  response.render("cuddles.ejs",{cuddles: favorite_arr, catId: 1});
})

app.get('/barney', function(request, response) {
  var favorite_arr = [{food:"Pizza", toy:"ball"},
  {food:"Cheeseburger", toy:"ping pong"},
  {food:"Crabcake", toy:"golf"}];
  response.render("cuddles.ejs",{cuddles: favorite_arr, catId: 2});
})

app.get('/triplets', function(request, response) {
  var favorite_arr = [{food:"Limepie", toy:"stress ball"},
  {food:"Tiramisu", toy:"ping pong"},
  {food:"Cheesecake", toy:"golf"}];
  response.render("cuddles.ejs",{cuddles: favorite_arr, catId: 3});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})