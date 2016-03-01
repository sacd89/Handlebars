var express = require("express");
var app = express();
var handlebars = require("express-handlebars") 
        .create({ defaultLayout: "main" });
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");


app.get("/", function(req, res){
   //var nombre = "<h1>Daniela</h1>";
   var data = {name: "Daniela"};
   var nombres = ["Hugo", "Paco", "Luis"];
   res.render("index",data); 
});


app.listen(8080);