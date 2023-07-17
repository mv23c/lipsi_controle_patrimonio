-- CreateTable
CREATE TABLE "patrimonios" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Tombamento" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,
    "Detentor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patrimonios_pkey" PRIMARY KEY ("id")
);
