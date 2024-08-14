import express from 'express';
import { user } from '../Model/User.js';

const router5 = express.Router();

router5.use(express.json());

router5.get("/user", async (req, res) => {
    try {
        const data = await user.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router5.post("/user", async (req, res) => {
    try {
        const data = new user(req.body);
        await data.save();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router5;