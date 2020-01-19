const mongoose = require('mongoose');

const latlongSchema =  mongoose.Schema({
    state:{type:String},
    lat:{type:Number},
    long:{type:Number}

}) //to create a schema
const latlongModel = mongoose.model("latlong" , latlongSchema);
latlongModel.findUsers = function(req, callBack) {
    let id = req.query.id;
    let query={};
    if(id) {
        query = { _id: id }      //_id mongodb generates for every query     
        //query params(username and password never comes in query params for secuRity reasons)
    }
    latlongModel.find(query,callBack)     //inbuilt mongoose method
    //latlongModel.find({},callBack)
      //call find function of mongoose which is same as find of mongodb
}

latlongModel.addUsers = function(req,callBack) {
    console.log(req.body);
    let user=req.body;
    latlongModel.create(user,callBack)
}

latlongModel.updateUsers = function(req,callBack) {
    let query= {_id:req.body._id};
    let user=req.body;
    latlongModel.updateOne(query,user,callBack)
    
}

module.exports = latlongModel;