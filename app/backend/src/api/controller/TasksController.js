/* eslint-disable consistent-return */
const { StatusCodes } = require('http-status-codes');
const TasksService = require('../services/TasksService');

class UserController {
  constructor() {
    this.tasksService = new TasksService();
  }

  findAll = async (req, res, next) => {
    try {
      const result = await this.tasksService.findAll();
      return res.status(StatusCodes.OK).json({ result });
    } catch (e) {
      next(e);
    }
  };

  findByUserId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await this.tasksService.findByUser(+id);
      return res.status(StatusCodes.OK).json({ result });
    } catch (e) {
      next(e);
    }
  };

  deleteTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.tasksService.deleteByTaskId(+id);
      return res.status(StatusCodes.OK).json({ meessage: 'task deleted' });
    } catch (e) {
      next(e);
    }
  };

  create = async (req, res, next) => {
    try {
      const { description, state, userId } = req.body;
      const result = this.tasksService.createTask(description, state, +userId);
      return res.status(StatusCodes.OK).json({ message: result });
    } catch (e) {
      next(e);
    }
  };

  editTask = async (req, res, next) => {
    try {
      const { state } = req.body;
      const { id } = req.params;
      const result = await this.tasksService.editTask(state, +id);
      return res.status(StatusCodes.OK).json(result);
    } catch (e) {
      next(e);
    }
  };
}

module.exports = UserController;
