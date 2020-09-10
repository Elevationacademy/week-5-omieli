const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const SolarSystem = require("./models/solarSystemModel");
const Planet = require("./models/planetModel");
const Visit = require("./models/visitModel");

const app = express();


mongoose.connect("mongodb://localhost/interstallerDB", {  useNewUrlParser: true, useUnifiedTopology: true,});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "node_modules")));

// let s1 = new SolarSystem({
//     planets: [],
//     starName: "Klingon"
// })


// let p1 = new Planet({
//     name: "tlv",
//     system: s1,
//     visitors: []
// })


// let p2 = new Planet({
//     name: "jer",
//     system: s1,
//     visitors: []
// })



// let v1 = new Visit({
//     name: "jhon mcclein",
//     homePlanet: p2,
//     visitedPlanets: []
// })


// let v2 = new Visit({
//     name: "NEO",
//     homePlanet: p1,
//     visitedPlanets: []
// })

// let v3 = new Visit({
//     name: "THOR",
//     homePlanet: p2,
//     visitedPlanets: []
// })

// s1.planets.push(p1)
// s1.planets.push(p2)
// p1.visitors.push(v1)
// p2.visitors.push(v2)
// v2.visitedPlanets.push(p1)
// v3.visitedPlanets.push(p2)
// s1.save()
// v1.save()
// v2.save()
// v3.save()
// p1.save()
// p2.save()

	//Find a visitor's list of visited planets
    Visit.findOne({}).populate("visitedPlanets")
    .exec(function (err, visitor) {
    visitor.visitedPlanets.forEach(v => console.log(v.name))
	})
	

	



app.listen(3000, function () {
    console.log("Server running on 3000");
  });