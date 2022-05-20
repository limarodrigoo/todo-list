const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const task1 = await prisma.task.create({
    data: {
      userId: 1,
      description: 'Teste',
      state: 'doing',
    },
  });
  console.log(task1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
})
  .finally(async () => {
    await prisma.$disconnect;
  });
