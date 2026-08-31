import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Prisma 7 takes the connection through a driver adapter rather than a `url`
// in schema.prisma. On Heroku, DATABASE_URL is supplied by the Postgres add-on
// and rotated periodically, so it is always read from the environment.
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

function createClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
}

export const prisma = globalForPrisma.prisma ?? createClient();

// Avoid exhausting connections through hot reloads in development.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
