-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('DEFAULT', 'ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "permissions" "Permission" NOT NULL DEFAULT 'DEFAULT';
