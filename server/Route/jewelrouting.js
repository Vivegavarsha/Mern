import express from "express";
import { Model3 } from "../Model/jewel.js";

const router3= express.Router();


router3.get("/", async (req, res) => {
  try {
    const data = await Model3.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router3.get("/:id", async (req, res) => {
  try {
    const data = await Model3.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router3.delete("/:id", async (req, res) => {
  try {
    const data = await Model3.findByIdAndDelete(req.params.id);
    res.status(200).json("id deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
router3.put("/:id", async (req, res) => {
  try {
    const data = await Model3.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router3.post("/", async (req, res) => {
  try {
    const new_data = new Model3(req.body);
    await new_data.save();
    res.status(201).json(new_data);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default router3
