// const mongoose = require('mongoose')

// //connect mongoose to our database
// mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })


// //Building a schema
// const Schema = mongoose.Schema

// // const personSchema = new Schema({
// //   firstName: String,
// //   lastName: String,
// //   age: Number
// // })
// // A schema is just a blueprint


// //Building a schema with guarantee that some fields have a value
// const addressSchema = new Schema( {
//     city : String,
//     street: String,
//     apartment : Number
// })
  
// const personSchema = new Schema({
//     firstName: { type: String, required: true },
//     lastName: String,
//     age: Number,
//     address : addressSchema
// })



// /**The possible Schema Types are:

// String – mapped to javascript String
// Number – mapped to javascript Number
// Boolean - mapped to javascript Boolean
// Array – mapped to javascript Array(object)
// Date – mapped to javascript object (date object)
// ObjectId | Oid – mapped to javascript object
// Mixed – mapped to javascript object */


// /**Here mongoose.model creates a Person model. The first parameter, 
// the string 'Person', is our choice for the model name, the second argument is our personSchema
// Notice that by convention, we capitalize the model name and variable. */
// const Person = mongoose.model('person', personSchema)

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
// console.log(p1)

// p1.save()




