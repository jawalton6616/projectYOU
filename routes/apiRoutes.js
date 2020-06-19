const router = require("express").Router;
const apiRoutes = router();
const { User, Exercise, Fluid, Sleep } = require("../models");

apiRoutes.get("/user", (req, res) => {
  User.findAll({}).then((results) => {
    res.json(results);
  });
});

apiRoutes.get("/user/exercise", (req, res) => {
  Exercise.findAll({}).then((results) => {
    res.json(results);
  });
});

apiRoutes.get("/user/fluid", (req, res) => {
  Fluid.findAll({}).then((results) => {
    res.json(results);
  });
});

apiRoutes.get("/user/sleep", (req, res) => {
  Sleep.findAll({}).then((results) => {
    res.json(results);
  });
});

apiRoutes.post("/user/exercise", (req, res) => {
  Exercise.create({
    exercise_type: req.body.exercise_type,
    exercise_duration: req.body.exercise_duration,
    user_Id: req.body.user_Id,
  }).then((results) => {
    res.end();
  });
});

apiRoutes.post("/user/fluid", (req, res) => {
  Fluid.create({
    fluid_type: req.body.fluid_type,
    numOfGlasses: req.body.numOfGlasses,
    user_Id: req.body.user_Id,
  }).then((results) => {
    res.end();
  });
});

apiRoutes.post("/user/sleep", (req, res) => {
  Sleep.create({
    sleep_duration: req.body.sleep_duration,
    user_Id: req.body.user_Id,
  }).then((results) => {
    res.end();
  });
});

module.exports = apiRoutes;
