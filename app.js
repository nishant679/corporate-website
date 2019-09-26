const addRoute=require('./routes/addNews');
const app = require('express')();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const getRoute=require('./routes/getNews');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routing
app.use("/addNews", addRoute);
app.use("/", getRoute);


//connecting to the server
app.listen(process.env.port||5000,function(){
	console.log("Server started at 5000");
})