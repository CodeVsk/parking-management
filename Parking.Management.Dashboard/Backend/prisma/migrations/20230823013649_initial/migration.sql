/*
  Warnings:

  - You are about to drop the column `course` on the `users` table. All the data in the column will be lost.
  - The `gender` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `state` to the `colleges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'O');

-- AlterTable
ALTER TABLE "colleges" ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "course",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "courseId" TEXT NOT NULL,
ADD COLUMN     "state" TEXT,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'O';

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "collegeId" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "colleges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
