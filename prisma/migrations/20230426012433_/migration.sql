-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterOrganization" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "MasterOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterBusiness" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "applicationType" TEXT NOT NULL,

    CONSTRAINT "MasterBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterLocation" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "MasterLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
