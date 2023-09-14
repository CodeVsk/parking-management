/*
  Warnings:

  - The `type` column on the `vehicles` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('AUTOMOBILE');

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "type",
ADD COLUMN     "type" "VehicleType" NOT NULL DEFAULT 'AUTOMOBILE';
