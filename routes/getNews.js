const bodyParser = require('body-parser');
const express = require('express');
const router = express();
const News=require('../model/News');

router.get("/",function(req,res)
{  
    News.find({},function (err, news) {
      if (err) 
        console.log(err);
      else
         res.send(news);
    });	
})

module.exports=router;