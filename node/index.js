const express = require("express"); //importing express (framework or library)
const bodyparser = require("body-parser");
require('./dbconnection');//copy paste code at runtime
const state = require('./routes/state');
const latlong = require('./routes/latlong');
//const Books = require('./Books');
var app = express();     //variable using express
//SYNTAX--app.<METHODNAME>('path',handler()=>{})
/*const book = new Books({
  id:0,
  name:"Goosebumps",
  author:"R.L.STINE",
  version:"1.1",
  image:"http://covers.openlibrary.org/b/olid/OL24208525M-M.jpg",
  description:"Goosebumps author R L Stine is harrowed after demons from his books come to life and spread havoc in Delaware. He, along with his daughter and her friend, tries to get them back in the books."
})
const fun=async function(){
  await book.save();
}
fun();*/
/*var books=[
        {
          "id": 0,
          "name": "Goosebumps",
          "author": "R.L.STINE",
          "version": "1.1",
          "image":"http://covers.openlibrary.org/b/olid/OL24208525M-M.jpg",
          "description":"Goosebumps author R L Stine is harrowed after demons from his books come to life and spread havoc in Delaware. He, along with his daughter and her friend, tries to get them back in the books."
        },
        {
          "id": 1,
          "name": "Dragon's Halloween",
          "author": "DAV PILKEY",
          "version": "1.2",
          "image": "//covers.openlibrary.org/w/id/278331-M.jpg",
          "description": "Dragon has a busy and fun-filled Halloween, turning six small pumpkins into one big jack-o-lantern, going to a costume party, and taking a spooky walk in the woods"
        },
        {
          "id": 2,
          "name": "Wolves of the Calla",
          "author": "STEPHEN KING",
          "version": "5",
          "image": "//covers.openlibrary.org/w/id/8971143-M.jpg",
          "description": "Wolves of the Calla is the fifth novel in the Dark Tower series by Stephen King. In this novel, Roland and his ka-tet, Eddie, Susannah, and Jake, are following the Path of the Beam in their quest to find the Dark Tower when they are met by a group of people from a nearby community called Calla Bryn Sturgis."
        },
        {
          "id": "3",
          "name": "Captain Underpants and the invasion",
          "author": "DAV PILKEY",
          "version": "5",
          "image": "//covers.openlibrary.org/w/id/6468074-M.jpg",
          "description": "Captain Underpants and the Invasion of the Incredibly Naughty Cafeteria Ladies from Outer Space is the third book of the Captain Underpants series by Dav Pilkey."
        },
        {
          "id": "4",
          "name": "alice adventures in wonderland",
          "author": "Lewis Carroll",
          "version": "10",
          "image": "http://covers.openlibrary.org/b/id/8595949-M.jpg",
          "description": "Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a young girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures."
        }
      ]*/
//middleware
app.use(bodyparser.json());       //request ko read krne wali form mein convert krta hau
app.use("*",(req,res,next)=>{
    console.log("MiddleWare is Called");
    res.setHeader('Access-Control-Allow-Origin',"*")//used for cross-origin(CORS)
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Acess-Control-Allow-Headers,Authorization,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","*");
    next();                       //next is inbuild required by express to go to the next function
})

app.use("/state",state);
app.use("/latlong",latlong);

/*
app.get("",function(req,res){
    res.send("Library-portal");//we can send any type of response
   // res.json("library");//we can only send json type of response
})

app.use("/users",users);
app.get("/books",(req,res)=>{
    res.send(books);
})
app.post("/Add",(req,res)=>{
    res.send("Add Books");
    console.log("Add Book is Called",req.body);
    let book=req.body;
    books.push(req.body);
    res.send(book);
})
app.delete('/Delete/:id',(req,res)=>{
    console.table(`book to be deleted is ${req.params.id}`)
       books=books.filter(books=>books.id!==req.params.id);
        res.send(books);
})*/
app.listen(8081,()=>{  //8080 non secured port normally used in http
    console.log("Server is Listening At Port 8081")  //output->Cannot GET /(making a get request at path '/')
})

