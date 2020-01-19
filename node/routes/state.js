const express = require('express');
const router = express.Router();
const UsersModel = require('./../models/state')
router.get('' , (req,res)=> {
    UsersModel.findUsers(req, (error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
})

router.get('/:id' , (req,res)=> {
    UsersModel.findById(req.params.id,function(error,response){
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
})

router.post('/add',(req,res)=>{
    UsersModel.addUsers(req,(error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
    //res.send('Users response from router');        
})
router.delete('/deletetouristplace/:id/:parent',(req,res)=>{
    const iid=req.params.id;
    const pparent=req.params.parent;
    UsersModel.findByIdAndUpdate(
        pparent,
        {$pull:{'tourist':{ _id:iid }}},
        function(err,model){
            if(err){
                console.log(err)
                return res.send(err);
            }
            return res.json(model);
        }
    )
    /*UsersModel.deleteOne({'tourist._id':iid},
    function(err,model){
        if(err){
            console.log(err)
            return res.send(err)
        }
        return res.json(model);
    });   */
})
router.put('/stateupdate/:id',(req,res)=>{
    UsersModel.updateUsers(req.params.id,req,(error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
    //res.send('Users response from router');        
})
router.put('/update/:id',(req,res)=>{
    const a = req.params.id;
    const name = req.body.name;
    const info = req.body.info;
    const images = req.body.images;
    const location = req.body.location;
    UsersModel.updateOne({'tourist._id':a},
    {'$set': {
        'tourist.$.name':name,
        'tourist.$.info':info,
        'tourist.$.images':images,
        'tourist.$.location':location,
    }},
    function(err,model){
        if(err){
            console.log(err)
            return res.send(err)
        }
        return res.json(model);
    });   
})


module.exports = router;