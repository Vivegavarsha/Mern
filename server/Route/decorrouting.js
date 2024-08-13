import express from "express";
import { Model2 } from "../Model/decor.js";

const router2 = express.Router();


router2.get("/", async (req, res) => {
  try {
    const data = await Model2.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router2.get("/:id", async (req, res) => {
  try {
    const data = await Model2.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router2.delete("/:id", async (req, res) => {
  try {
    const data = await Model2.findByIdAndDelete(req.params.id);
    res.status(200).json("id deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
router2.put("/:id", async (req, res) => {
  try {
    const data = await Model2.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router2.post("/", async (req, res) => {
  try {
    const new_data = new Model2(req.body);
    await new_data.save();
    res.status(201).json(new_data);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default router2
