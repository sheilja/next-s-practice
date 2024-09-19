/*
  Warnings:

  - You are about to drop the column `assignedToUserId` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `assignedToUserId`;

-- DropTable
DROP TABLE `user`;
