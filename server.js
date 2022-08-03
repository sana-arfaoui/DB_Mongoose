const express = require("express")
const mongoose = require("mongoose");
const app = express();
const Person = require("./model/Person");


const port = process.env.PORT || 5000;

require("dotenv").config();
const uri = process.env.uri;

//connect
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected sucessfully");
  }
);
// mongoose.connect("mongodb+srv://SanaArfaoui:SanaArfaoui@cluster0.fmbko.mongodb.net/checkmongoose?retryWrites=true&w=majority",
// { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) throw err;
//     console.log("connected sucessfully")})

//Create and Save a Record of a Model:

/*const person = new Person({
    name : "Sana",
    age:26,
    favoriteFoods:["pizza", "salade", "soupe"]
});

person.save((err,data) =>{
    if (err) throw err
    console.log(data)
})
//Create Many Records with model.create()

Person.create(
    [{
        name:"Leila",
        age:21,
        favoriteFoods:["spaghetti","salade"]
    },
    {
        name:"Meriam",
        age:27,
        favoriteFoods:["soupe","sushi"]
    },
    {
        name:"Ahmed",
        age:30,
        favoriteFoods:["pasta","couscous"]
    }

    ],
    (err, data) => {
        if (err) throw err;
        console.log(data);
      }
)*/

//Use model.find() to Search Your Database
// Person.find((err,data)=>{
//   if (err) throw err
//    console.log(data);
// })

//Use model.findOne() to Return a Single Matching Document from Your Database
// Person.findOne({favoriteFoods:"pasta"},(err,data)=>{
//   if(err) throw err
//   console.log(data);
// })
//Use model.findById() to Search Your Database By _id
// Person.findById({_id:"62eac96e8104b4d21a31c7ed"},(err,data)=>{
//   if(err) throw err
//   console.log(data);
// })

//Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({name:"Meriam"},{$set:{age:20}},{new:true},(err,data)=>{
//   if (err) throw err;
//     console.log(data)

// })
//Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndRemove("62eac96e8104b4d21a31c7ef",(err,data)=>{
//   if (err) throw err
//     console.log(data)
// })

//MongoDB and Mongoose - Delete Many Documents with model.remove()
/*Person.create([
  {name:"Mary",age:30, favoriteFoods:["toast","milk","spaghetti"]},

  {name:"Mary",age:22,favoriteFoods:["jus","pizza","lasagne"]},
  {name:"Rouba", age:17,favoriteFoods:["burritos"]},
  {name:"Ashwarya", age:18,favoriteFoods:["burritos"]}],(err,data)=>{
  if (err) throw err
   console.log(data);
})*/
//MongoDB and Mongoose - Delete Many Documents with model.remove()

/*Person.remove({name:"Mary"},(err,data)=>{
  if (err) throw err
   console.log(data);

})*/

//Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFoods:'burritos'}).sort({name:1}).select({age:0}).limit(2).exec((err,data)=>{
  if (err) throw err
  console.log(data)
})
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`app is running at http://localhost:${port}`);
  });
