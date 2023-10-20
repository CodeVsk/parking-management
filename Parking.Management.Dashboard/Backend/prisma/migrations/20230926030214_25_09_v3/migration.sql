/*
  Warnings:

  - Made the column `userEntryId` on table `garage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "garage" ALTER COLUMN "userEntryId" SET NOT NULL;
