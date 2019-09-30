var mongoose = require("mongoose");
var newsSchema = new mongoose.Schema({
    body: String,
    date: String,
    press: String,
    url: String
});
module.exports = mongoose.model('news', newsSchema);
