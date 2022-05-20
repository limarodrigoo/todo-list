/* eslint-disable no-unused-vars */
const error = (err, req, res, _next) => {
  console.log(err);
  return res.status(500).json({ message: 'Something wrong happened' });
};

module.exports = error;
