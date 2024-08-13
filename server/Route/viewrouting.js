import express from "express";
import { Model1 } from "../Model/view.js";

const router1 = express.Router();


router1.get("/", async (req, res) => {
  try {
    const data = await Model1.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router1.get("/:id", async (req, res) => {
  try {
    const data = await Model1.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router1.delete("/:id", async (req, res) => {
  try {
    const data = await Model1.findByIdAndDelete(req.params.id);
    res.status(200).json("id deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
router1.put("/:id", async (req, res) => {
  try {
    const data = await Model1.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router1.post("/", async (req, res) => {
  try {
    const new_data = new Model1(req.body);
    await new_data.save();
    res.status(201).json(new_data);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default router1
