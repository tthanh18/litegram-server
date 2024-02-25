import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserModule {
  static async getAllUsers() { 

    const users = await prisma.user.findMany()

    return users
  }
}