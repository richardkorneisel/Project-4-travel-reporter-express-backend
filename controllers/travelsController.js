const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const TravelModel = require("../models").Travel;

// GET ALL TRIP REPORTS
router.get("/", async (req, res) => {
    let travels = await TravelModel.findAll();  //{ include: SongModel }
    res.json({ travels });
  });

// CREATE A NEW TRIP REPORT
router.post("/", async (req, res) => {
    let travel = await TravelModel.create(req.body);
    res.json({ travel });
  });

module.exports = router;