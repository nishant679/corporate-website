const News=require('../models/News');

function getNews(req,res)
{
    News.find({},function (err, news) {
        if (err)
            console.log(err);
        else
            res.send(news);
    });
}

module.exports=getNews;