/*
  Warnings:

  - You are about to drop the `QrCode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QrCode" DROP CONSTRAINT "QrCode_userId_fkey";

-- DropTable
DROP TABLE "QrCode";

-- CreateTable
CREATE TABLE "qrcode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "qrcode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "qrcode" ADD CONSTRAINT "qrcode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
