-- DropForeignKey
ALTER TABLE "garage" DROP CONSTRAINT "garage_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "vehicle_notes" DROP CONSTRAINT "vehicle_notes_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "vehicle_responsibles" DROP CONSTRAINT "vehicle_responsibles_vehicleId_fkey";

-- AddForeignKey
ALTER TABLE "garage" ADD CONSTRAINT "garage_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle_responsibles" ADD CONSTRAINT "vehicle_responsibles_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle_notes" ADD CONSTRAINT "vehicle_notes_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
