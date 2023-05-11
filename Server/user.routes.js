const express = require("express");

const userRouter = require("express").Router();
const dataSchema = require("./Model");

userRouter.post("/add", async (req, res) => {
  const { name, dob, mobile, sex } = req.body;
  console.log(req.body);
  const addData = new dataSchema({
    name,
    dob,
    mobile,
    sex,
  });
  await addData.save();
  console.log(addData);
  res.send(req.body);
});
userRouter.get("/", async (req, res) => {
  const data = await dataSchema.find({});
  res.status(200).send({ data });
});
module.exports = userRouter;
