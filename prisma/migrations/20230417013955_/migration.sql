-- CreateTable
CREATE TABLE "CompanyDetails" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "CompanyDetails_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyDetails_name_key" ON "CompanyDetails"("name");
