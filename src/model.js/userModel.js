const pool = require("../../db");
// recieves name,email and encoded password and saves in db
exports.getUserCountByEmail = (email) => {
  const res = pool
    .query("select count(*) from users where email =$1", [email])
    .then((res) => {
      console.log("user count:", res.rows[0].count);
      return res.rows[0].count;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

exports.getUserByEmailId = (email) => {
  const res = pool
    .query("select * from users where email =$1", [email])
    .then((res) => {
      console.log(res)
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

exports.saveUserIfNotExist = (username, email, password) => {
  const saveUser = pool
    .query("INSERT INTO users(username,email,password) VALUES($1,$2,$3)", [
      username,
      email,
      password,
    ])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.stack);
      err;
    });
  return saveUser;
};
