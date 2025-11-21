import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Simple query to check connection
    const users = await prisma.user.findMany();
    console.log('Database connected! Users');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export const dbConnection = main();
