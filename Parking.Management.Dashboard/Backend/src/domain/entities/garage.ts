import { Prisma, Status } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { AutoMap } from "@automapper/classes";

export class Garage
  extends Entity
  implements Prisma.GarageUncheckedCreateInput
{
  @AutoMap()
  status: Status;
  @AutoMap()
  entryTime: Date;
  @AutoMap()
  departureTime: Date;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  userEntryId: string;
  @AutoMap()
  userDepartureId: string;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
