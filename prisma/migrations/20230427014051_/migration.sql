/*
  Warnings:

  - You are about to drop the column `applicationType` on the `MasterBusiness` table. All the data in the column will be lost.
  - You are about to drop the column `businessType` on the `MasterBusiness` table. All the data in the column will be lost.
  - Added the required column `appID` to the `MasterBusiness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessTypeId` to the `MasterBusiness` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MasterBusiness" DROP COLUMN "applicationType",
DROP COLUMN "businessType",
ADD COLUMN     "appID" INTEGER NOT NULL,
ADD COLUMN     "businessTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MasterBusiness" ADD CONSTRAINT "MasterBusiness_businessTypeId_fkey" FOREIGN KEY ("businessTypeId") REFERENCES "Reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterBusiness" ADD CONSTRAINT "MasterBusiness_appID_fkey" FOREIGN KEY ("appID") REFERENCES "Reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
