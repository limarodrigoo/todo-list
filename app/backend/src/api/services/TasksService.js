const { PrismaClient } = require('@prisma/client');

class TasksService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  findAll = async () => this.prisma.task.findMany();

  findByUser = async (id) => this.prisma.task.findMany({ where: { userId: id } });

  deleteByTaskId = async (id) => this.prisma.task.delete({ where: { id } });

  createTask = async (description, state) => this.prisma.task.create({
    data: {
      description,
      state,
      // userId, implement userFeature
    },
  });

  editTask = async (state, id) => this.prisma.task.update({ where: { id }, data: { state } });
}

module.exports = TasksService;
