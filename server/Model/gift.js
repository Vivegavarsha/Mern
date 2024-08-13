import mongoose from "mongoose";
const { Schema } = mongoose;

const schema4 = new Schema({
    id: String,
    image: String,
    title: String,
    price: Number,
   
});

export const Model4 = mongoose.model('GiftModel', schema4);