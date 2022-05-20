/* eslint-disable consistent-return */
const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  findAll = async (req, res, next) => {
    try {
      const result = await this.userService.findAll();
      return res.status(StatusCodes.OK).json({ result });
    } catch (e) {
      next(e);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { user, email, password } = req.body;
      const result = await this.userService.create(user, email, password);
      return res.status(StatusCodes.CREATED).json({ created: result });
    } catch (e) {
      next(e);
    }
  };
}

module.exports = UserController;
