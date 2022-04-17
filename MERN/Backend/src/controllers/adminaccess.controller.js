const express = require("express");
const Access = require("../models/adminaccess.model.js");

const router = express.Router();
router.post("", async (req, res) => {
  try {
    const access = await Access.create(req.body);
    return res.status(201).send(access);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const access = await Access.findById(req.params.id).populate().lean().exec();
    return res.status(200).send(access);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const access = await Access.find().lean().exec();
    return res.status(200).send(access);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;