-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isShow" BOOLEAN NOT NULL DEFAULT true,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isParent" BOOLEAN NOT NULL DEFAULT false,
    "parentId" INTEGER,
    "fieldProp" TEXT NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isShow" BOOLEAN NOT NULL DEFAULT true,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "entityId" INTEGER NOT NULL,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_code_key" ON "Entity"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_parentId_key" ON "Entity"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "Reference_code_key" ON "Reference"("code");

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
