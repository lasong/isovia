-- CreateEnum
CREATE TYPE "EnquiryType" AS ENUM ('REGULAR', 'EMERGENCY', 'BACKUP');

-- CreateTable
CREATE TABLE "ContactEnquiry" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "frequency" TEXT,
    "temperature" TEXT,
    "enquiryType" "EnquiryType" NOT NULL,
    "message" TEXT,
    "locale" TEXT NOT NULL,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContactEnquiry_createdAt_idx" ON "ContactEnquiry"("createdAt");

-- CreateIndex
CREATE INDEX "ContactEnquiry_enquiryType_idx" ON "ContactEnquiry"("enquiryType");
