import mongoose from "mongoose";
const { Schema } = mongoose;

const schema3 = new Schema({
    id: String,
    image: String,
    title: String,
    price: Number,
   
});

export const Model3 = mongoose.model('JewelModel', schema3);