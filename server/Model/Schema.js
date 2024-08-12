import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
    id: String,
    title: String,
    price: Number,
    imageUrl: String,
    isNew: Boolean
});

export const Model = mongoose.model('Model', schema);
