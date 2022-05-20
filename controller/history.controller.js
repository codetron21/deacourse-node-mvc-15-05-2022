const express = require("express");
const router = express.Router();
const History = require("../model/history.model");

router.get("/", (_, response) => {
  console.log("get request to /history");

  History.getHistory((data) => {
    const history = {
      title: "MOBILE-LEGEND-HISTORY",
      data,
    };

    console.log("History", history);

    response.render("history", { history });
    response.end();
  });
});

module.exports = router;
