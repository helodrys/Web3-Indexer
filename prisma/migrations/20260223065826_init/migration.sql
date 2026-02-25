-- CreateTable
CREATE TABLE "TransferEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "txHash" TEXT NOT NULL,
    "blockNumber" BIGINT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
