import mongoose from "mongoose";
const { Schema } = mongoose;

const schema1 = new Schema({
    id: String,
    image: String,
    title: String,
    price: Number,
   
});

export const Model1 = mongoose.model('ViewModel', schema1);
