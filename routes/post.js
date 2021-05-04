const express = require('express');
const router = express.Router();
const Post = require('../models/form');


//SUBMITS THE POST
router.post('/', async(req, res) => {
    // console.log(req.body);

    const post = async() => {
        const post = new Post({
            userID: req.body.userID,
            marketID: req.body.marketID,
            marketName: req.body.marketName,
            cmdtyID: req.body.cmdtyID,
            marketType: req.body.marketType,
            cmdtyName: req.body.cmdtyName,
            priceUnit: req.body.priceUnit,
            convFctr: req.body.convFctr,
            price: req.body.price / req.body.convFctr,
        });
        post.users.push(req.body.userID);
        const savedPost = await post.save();
        res.json({status: "success", reportID: savedPost.id});
    }

    try {
        const mrID = req.body.marketID;
        const cmID = req.body.cmdtyID;
        const uID = req.body.userID;
        const pNew = req.body.price / req.body.convFctr;
        // const cNew = req.body.convFctr;
        const result = await Post.find({"marketID": mrID, "cmdtyID": cmID}).exec();
        // console.log(result.length);
        if(result.length > 0) {
            Post.find({"marketID": mrID, "cmdtyID": cmID}, (err, docs) => {
                console.log(docs[0].users)
                docs[0].users.push(uID);
                docs[0].priceUnit = "Kg";
                
                docs[0].price = (docs[0].price * (docs[0].users.length - 1) + pNew) / docs[0].users.length;

                docs[0].save((err) => {
                    if(err) 
                        console.error(`ERROR!`);
                    else 
                        res.json({status: "success", reportID: docs[0].id});
                });
            });
        }
            
        else    
            post();
    } catch (error) {
        res.json({message: error})
        //post();
    }
});

router.get('/', async(req, res) => {
    var id = req.query.reportID
    // console.log(id)
    try{
        const result = await Post.findById(id).exec();
        res.json(result);
    } catch(err) {
        res.sendStatus(404);
    }
})
module.exports = router;