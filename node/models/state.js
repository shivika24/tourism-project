const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    //io:Number,
    name:String,
    description:String,
    image:String,
    category:String,
    price:Number,
})
const TouristSchema = mongoose.Schema({
    name:String,
    info:String,
    images:String,
    location:String,
})
const usersSchema =  mongoose.Schema({
    id:{type:Number},
    mainid:{type:String},
    name:{type:String},
    capital:{type:String}, 
    about:{type:String},
    climate:{type:String},
    history:{type:String},
    time:{type:String},
    food:{type:String}, 
    img:{type:Array},
    products:[{type:ProductSchema}],
    tourist:[TouristSchema]

}) //to create a schema
const UsersModel = mongoose.model("state" , usersSchema);
const Touristmodal = mongoose.model("tourist",TouristSchema);
UsersModel.findUsers = function(req, callBack) {
    let id = req.query.id;
    let query={};
    if(id) {
        query = { _id: id }      //_id mongodb generates for every query     
        //query params(username and password never comes in query params for secuRity reasons)
    }
    UsersModel.find(query,callBack)     //inbuilt mongoose method
    //UsersModel.find({},callBack)
      //call find function of mongoose which is same as find of mongodb
}

UsersModel.addUsers = function(req,callBack) {
    console.log(req.body);
    let user=req.body;
    UsersModel.create(user,callBack)
}
UsersModel.updateUsers = function(id,req,callBack) {
    let q = {_id :id};
    let up=req.body;
    UsersModel.updateOne(q,up,callBack);
}
/*UsersModel.updateUsers =async  function(a,parent,req,callBack) {
    UsersModel.updateOne({'tourist._id':a},
    {'$set': {
        'tourist.$.name':"updating done",
    }},
    function(err,model){
        if(err){
            console.log(err)
            return res.send(err)
        }
        return res.json(model);
    });
    }*/
    // const id = a.slice(3);
    // const pId = parent.slice(7);
    
    // let query= {_id:id};
   
    // let user=req.body;
    // // console.log(req.body);
    // const tourist= await UsersModel.find({_id:parent});
    // console.log(tourist);
    /*UsersModel.updateOne(
        { _id: parent , "tourist._id":a },
        { $set: {"tourist":req.body}  },
        
        function(err){
            console.log(err)
        }
    );*/


module.exports = UsersModel;