import express from "express";
import { Model4 } from "../Model/gift.js";

const router4 = express.Router();


router4.get("/", async (req, res) => {
  try {
    const data = await Model4.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router4.get("/:id", async (req, res) => {
  try {
    const data = await Model4.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router4.delete("/:id", async (req, res) => {
  try {
    const data = await Model4.findByIdAndDelete(req.params.id);
    res.status(200).json("id deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
router4.put("/:id", async (req, res) => {
  try {
    const data = await Model4.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router4.post("/", async (req, res) => {
  try {
    const new_data = new Model4(req.body);
    await new_data.save();
    res.status(201).json(new_data);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default router4
