const pool = require("../../db");
const format = require("pg-format");
exports.populateProfiles = async (profiles) => {
  let query = format(
    "INSERT INTO profiles (slug,image,name,type) VALUES %L returning uid",
    profiles
  );
  const res = pool
    .query(query)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

exports.getAllModelsWithoutFilter = async () => {
  let query = format("SELECT name from profiles");
  const res = pool
    .query(query)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
exports.getAllModelsDetailsWithoutFilter = async () => {
  let query = format("SELECT * from profiles");
  const res = pool
    .query(query)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
