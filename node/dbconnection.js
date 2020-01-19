const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tourism',{useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology: true },()=>{
    console.log("db connected");//uca is the database name
});
var db=mongoose.connection;
db.on('error',function(){                   //to test there is on and once
    console.log("Error connecting to db")
})

db.once('open',function(){ 
    console.log("connected to db")
})
/*
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/uca',{      //listening address:port no. 
     useNewUrlParser:true,
     useUnifiedTopology:true
});

var db=mongoose.connection;

db.on('error',function(){                   //to test there is on and once
    console.log("Error connecting to db")
})

db.once('open',function(){
    console.log("connected to db")
})
*/
