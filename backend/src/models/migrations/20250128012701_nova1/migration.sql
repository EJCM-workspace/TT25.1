-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Reserve_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserve" ("address", "date", "id", "userEmail") SELECT "address", "date", "id", "userEmail" FROM "Reserve";
DROP TABLE "Reserve";
ALTER TABLE "new_Reserve" RENAME TO "Reserve";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
