const format = require("pg-format");
const pool = require("../../db");

exports.saveReview = (reviewObj) => {
  const { rating, review, profileId } = reviewObj;
  const reviewData = [parseInt(rating), review, parseInt(profileId)];
  let query = format(
    "INSERT INTO reviews(rating,review,profileId) VALUES(%L);",
    reviewData
  );
  console.log(query, reviewData);
  const res = pool
    .query(query)
    .then((result) => {
      console.log(result);
      return { res: result.rows, err: false };
    })
    .catch((err) => {
      return { msg: err, err: true };
    });
  return res;
};

exports.getReviewByProfileId = (profileId) => {
  let query = `select * from reviews where profileid = ${profileId} `;
  console.log(query, profileId);
  const res = pool
    .query(query)
    .then((result) => {
      console.log(result);
      return { res: result.rows, err: false };
    })
    .catch((err) => {
      return { msg: err, err: true };
    });
  return res;
};
