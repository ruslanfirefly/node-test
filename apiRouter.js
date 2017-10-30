const express = require("express");

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    hello: "world"
  })
})

router.get("/test/:name", (req, res) => {
  res.json({
    hello: req.params.name
  })
})

module.exports = router