const express = require ("express");
const app = express();
const nunjucks = require("nunjucks")
// const http = require("http")
// var server = http.createServer();

const people = [{name: 'My'},{name: 'Bills'},{name: 'Be'}, {name: 'Stacking'}, {name: 'Cuz'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );

var locals = {
	title: "An Example",
	people: [
	{name: 'Gandalf'},
	{name: 'Frodo'}, 
	{name: 'Hermione'}
	]
};

nunjucks.configure("views", {noCache: true});
app.set("view engine", "html");
app.engine("html", nunjucks.render);

app.use("/", function (req,res,next){
	if(res.status === 200){
		console.log(res.status)
	}
	res.render( 'index', {title: "What's Happening?", people: people} );
});

app.get("/", function (req, res){
	res.send("Welcome!")
});

app.get("/is-anybody-in-there", function (req,res){
	console.log("Nobody is here.")
});

app.post("modernism", function (req, res){
	console.log("Modernism")
});

app.get("/hello", function (req,res){
	nunjucks.render("index.html",locals, function(error, output){
		res.send("output");
	})
});


app.listen(3000, function(){
	console.log("Server listening");
});





// app.get(“/workshops”, function (req, res, next){
// console.log(“Got /workshops”);
// next();
// });

// app.get(“/workshops”. function(req, res){
// var filteredWorkshops = workshops.filter(workshop => workshop.slice(0,1) ===           req.query.firstletter);
// 	res.send(“<h1>Workshops</h1><ul>” + workshops.map(workshop=> “<li> + workshop     + “</li>”).join(“\n”)+ “</ul>”);
// });

// app.get(“/workshops/:id”, function (req, res, next){
// 	res.send(workshops[+req.params.id]);
// });

// function middleWare (req, res, next){
// res.send();
// next();
// };

// app.get(“/workshops”, function (req, res, next){
// console.log(“Got /workshops”);
// next();
// });

// app.get(“/workshops”. function(req, res){
// var filteredWorkshops = workshops.filter(workshop => workshop.slice(0,1) ===           req.query.firstletter);
// 	res.send(“<h1>Workshops</h1><ul>” + workshops.map(workshop=> “<li> + workshop     + “</li>”).join(“\n”)+ “</ul>”);
// });

// app.get(“/workshops/:id”, function (req, res, next){
// 	res.send(workshops[+req.params.id]);
// });

// app.post(“/workshops”, function (req, res){
// 	workshops.push(req.body.title);
// 	res.status(204).send(workshops.join(“\n”));
// });