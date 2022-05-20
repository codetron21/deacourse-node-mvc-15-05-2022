const express = require("express");
const router = express.Router();
const Hero = require("../model/hero.model");

router.get("/", (_, response) => {
  console.log("get request to /heroes");

  Hero.getHeroes((data) => {
    const heroes = {
      title: "MOBILE-LEGEND-HERO-LIST",
      data,
    };

    response.render("index", { heroes });
    response.end();
  });
});

router.get("/:id", (request, response) => {
  console.log("get hero by id");

  const id = parseInt(request.params.id);

  const hero = {
    title: "MOBILE-LEGEND-DETAIL-HERO",
    data: [],
    errorMessage: "",
  };

  if (!id) {
    hero.errorMessage = `Error hero with id ${id}`;

    response.render("detail", { hero });
    response.end();
    return;
  }

  Hero.getHeroById(id, (data) => {
    hero.data = data;

    if (!hero.data.length) {
      hero.errorMessage = `Hero with id ${id} not found.`;
      response.render("detail", { hero });
      response.end();
      return;
    }

    console.log(hero);

    response.render("detail", { hero });
    response.end();
  });
});

router.post("/add", (request, response) => {
  console.log("add hero by id");

  Hero.addHero(request.body, () => {
    response.redirect("/heroes");
    response.end();
  });
});

router.post("/update", (request, response) => {
  console.log("update hero by id");

  console.log(request.body);

  Hero.updateHeroById(request.body, () => {
    response.redirect("/heroes");
    response.end();
  });
});

router.post("/remove", (request, response) => {
  console.log("remove hero by id");

  Hero.deleteHeroById(request.body, () => {
    response.redirect("/heroes");
    response.end();
  });
});

module.exports = router;
