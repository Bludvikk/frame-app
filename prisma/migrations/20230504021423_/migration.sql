/*
  Warnings:

  - You are about to drop the column `referenceId` on the `MasterBusiness` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MasterBusiness" DROP CONSTRAINT "MasterBusiness_referenceId_fkey";

-- AlterTable
ALTER TABLE "MasterBusiness" DROP COLUMN "referenceId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "hashedPassword" TEXT NOT NULL;
