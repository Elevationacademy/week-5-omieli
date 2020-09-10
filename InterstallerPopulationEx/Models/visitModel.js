const mongoose = require('mongoose')
const Schema = mongoose.Schema

const visitSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})





const Visit = mongoose.model("Visit", visitSchema)
module.exports = Visit