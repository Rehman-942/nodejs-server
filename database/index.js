const mongoose = require("mongoose");

const databaseConnect = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log(`Database connected at ${process.env.DATABASE_URL}`);
};

module.exports = databaseConnect;
