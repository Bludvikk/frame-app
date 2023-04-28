/*
  Warnings:

  - Added the required column `providerId` to the `MasterBusiness` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MasterBusiness" ADD COLUMN     "providerId" INTEGER NOT NULL,
ADD COLUMN     "referenceId" INTEGER;

-- AddForeignKey
ALTER TABLE "MasterBusiness" ADD CONSTRAINT "MasterBusiness_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterBusiness" ADD CONSTRAINT "MasterBusiness_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Reference"("id") ON DELETE SET NULL ON UPDATE CASCADE;
