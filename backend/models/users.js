const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    date: {type: Date},
    address: {type: String},
    phone: {type:String}
});

const reportSchema = new mongoose.Schema({
    name: {type: String},
    date: {type: Date},
    address: {type: String},
    phone: {type:String},
    medicine: {type:Array},
    summary: {type:String}
});

const userModel = mongoose.model('user',userSchema);
const reportModel = mongoose.model('report',reportSchema);

module.exports = {userModel,reportModel};