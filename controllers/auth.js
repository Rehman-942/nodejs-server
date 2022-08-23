const UserModal = require("../modal/user");

const signin = (req, res) => {
  const userData = new UserModal(req.body);
  userData
    .save()
    .then((item) => {
      res.status(200).json(req.body);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });

  //How to get data using await await userData.save()
};

module.exports = { signin };
