import mongoose from "mongoose";
const { Schema } = mongoose;

const schema2 = new Schema({
    id: String,
    image: String,
    title: String,
    price: Number,
   
});

export const Model2 = mongoose.model('DecorModel', schema2);