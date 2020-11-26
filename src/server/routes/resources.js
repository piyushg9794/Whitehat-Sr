const express = require('express');
const router = express.Router();
const Content = require('../models/resources');
const t= require('../misc/tags.json')


router.route('/getcontent')
.get(async(req, res) => {

    var tosend = {};
    var allcontent = await Content.find({tags: {$all: req.body.tags}});
    //console.log(t)
    for (let i=0; i< allcontent.length; i++){
        var content = allcontent[i].content;
        var tags = allcontent[i].tags;
        for (let k=0; k< tags.length; k++){
            if(tosend[tags[k]] === undefined){
                tosend[tags[k]] = []
            }
            tosend[tags[k]].push(content)
        }
    }
    console.log('response sent')
    res.send(tosend);
});


module.exports = router
