import { PrismaClient } from "@prisma/client";

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"], // Enable detailed logging for debugging
  });
}

prisma = global.prisma;

export default prisma;
