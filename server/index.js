import express from "express";
import mongoose from "mongoose";
import router from "./Route/Routing.js"; // Ensure this path is correct
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/handcraft', router);


mongoose.connect("mongodb+srv://varshalogu14:Varsha14!!@cluster0.x5e5y.mongodb.net/Handcraft?retryWrites=true&w=majority")
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});
