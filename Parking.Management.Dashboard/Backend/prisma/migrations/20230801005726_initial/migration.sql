/*
  Warnings:

  - The `status` column on the `garage` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INSIDE', 'OUTSIDE', 'STOLEN');

-- AlterTable
ALTER TABLE "garage" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INSIDE';
