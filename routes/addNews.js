const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const News= require('../model/News');

mongoose.connect("mongodb://localhost:27017/news",{ useNewUrlParser: true })

router.get("/",function(req,res)
{
    var temp=new Date();
    var d = temp.getDate();
    var month = new Array();
    month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var m = month[temp.getMonth()];
    var y= temp.getFullYear();
    var finalDate= m+" "+d+", "+y;
    console.log("Heyyyyyyy",finalDate);
    var addNews={
      body: "Intelligence agencies have warned about plans of international terror outfits including al-Qaida and cells affiliated to the Islamic States (IS) of attacking Jewish and Israeli communities in India during their holiday season in September and October.The agencies have alerted the states having a significant Jewish population about the possible attacks.",
      date: finalDate,
      press: "CNN",
      url: "https://timesofindia.indiatimes.com/india/al-qaida-terror-cells-affiliated-to-is-plan-to-attack-jews-israelis-in-india/articleshow/71309003.cms"
    }
    News.create(addNews,function (err, news) {
      if (err) 
        console.log(err);
      else
         console.log(news);
    });	
})
module.exports=router;