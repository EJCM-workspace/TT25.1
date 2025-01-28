-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isPremium" BOOLEAN NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reserve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Reserve_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
