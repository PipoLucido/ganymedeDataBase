const { Schema,model } = require('mongoose');

const esquema = new Schema(
    {job:String,
        array:[{
    title:String,
    price:Number,
    id:Number,
    SKD:Number,
    img:Array
}]}) 

module.exports = model('Jobs',esquema)