const express = require('express');
const cors = require('cors');
const UserController = require('./api/controller/UserController');
const TaskController = require('./api/controller/TasksController');
const errorMiddleware = require('./api/middlewares/error');

class App {
  constructor() {
    this.app = express();
    this.userController = new UserController();
    this.taskController = new TaskController();
  }

  start(PORT) {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errorMiddleware);
    this.app.get('/users', this.userController.findAll);
    this.app.post('/users', this.userController.createUser);
    this.app.get('/tasks', this.taskController.findAll);
    this.app.get('/tasks/:id', this.taskController.findByUserId);
    this.app.delete('/tasks/:id', this.taskController.deleteTask);
    this.app.post('/tasks', this.taskController.create);
    this.app.put('/tasks/:id', this.taskController.editTask);
    this.app.listen(PORT, () => console.log('Listen on', PORT));
  }
}

module.exports = App;
