const express = require("express");
const router = express.Router();

const Person = require("./Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

router.post('/person', function(req, res) {
    let person = req.body
    let p1 = new Person({
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age
    })
    
    p1.save()
    res.end()
})

module.exports = router;
