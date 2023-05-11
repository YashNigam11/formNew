const userModel = require("./user.schema");

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, age, sex, mobile } = req.body;
      if (!name || !age || !sex || !mobile) {
        return res
          .status(401)
          .send({ status: 401, data: "all the fields are required" });
      }

      const newUser = await userModel.create(req.body);
      res.status(200).send({ status: 200, data: newUser });
    } catch (error) {
      res.status(500).send({ status: 500, data: error.message });
    }
  },
};

module.exports = userController;
