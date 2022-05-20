const { PrismaClient } = require('@prisma/client');

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  findAll = async () => this.prisma.user.findMany();

  create = async (user, email, password) => this.prisma.user.create({
    data: {
      user,
      email,
      password,
    },
  });
}

module.exports = UserService;
