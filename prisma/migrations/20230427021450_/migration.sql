/*
  Warnings:

  - Added the required column `organizationId` to the `MasterBusiness` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MasterBusiness" ADD COLUMN     "organizationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MasterBusiness" ADD CONSTRAINT "MasterBusiness_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "MasterOrganization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
