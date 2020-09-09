const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

const Schema =  mongoose.Schema


const computerSchema = new Schema({
    makerTitle: String,
    price: Number
})

const Computer = mongoose.model('computer', computerSchema)

let c1 = new Computer({makerTitle: "Intel", price: 5000 })
let c2 = new Computer({makerTitle:"Apple", price: 25000})
let c3 = new Computer({makerTitle:"HP", price: 8000})
let c4 = new Computer({makerTitle:"Dell", price: 12000})
let c5 = new Computer({makerTitle: "Lenovo", price: 4000 })

const allComp = [c1, c2, c3, c4, c5]
allComp.forEach(c => c.save())

