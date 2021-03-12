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

 // UPDATE A TRIP
 router.put("/:id", async (req, res) => {
  let travel = await TravelModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ travel });
});

// DELETE A TRIP
router.delete("/:id", async (req, res) => {
  await TravelModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Trip Report with id ${req.params.id} was deleted`,
  });
});








module.exports = router;