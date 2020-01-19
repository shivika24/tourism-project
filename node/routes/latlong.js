const express = require('express');
const router = express.Router();
const latlongModel = require('./../models/latlong')
router.get('' , (req,res)=> {
    latlongModel.findUsers(req, (error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
})

router.post('/add',(req,res)=>{
    latlongModel.addUsers(req,(error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
    //res.send('Users response from router');        
})

router.put('/update',(req,res)=>{
    latlongModel.addUsers(req,(error,response)=>{
        if(error) console.log('Error is: ',error);
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response);
        }
    });
    //res.send('Users response from router');        
})


module.exports = router;