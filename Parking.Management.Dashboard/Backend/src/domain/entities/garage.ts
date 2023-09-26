import { Prisma, Status } from "@prisma/client";
import { Entity } from "../../core/domain/entity";
import { AutoMap } from "@automapper/classes";
import { User } from "./user";
import { Vehicle } from "./vehicle";

export class Garage
  extends Entity
  implements Prisma.GarageUncheckedCreateInput
{
  @AutoMap()
  status: Status;
  @AutoMap()
  entryTime: Date;
  @AutoMap()
  departureTime?: Date;
  @AutoMap()
  collegeId: string;
  @AutoMap()
  vehicleId: string;
  @AutoMap()
  vehicle?: Vehicle;
  @AutoMap()
  userEntryId: string;
  @AutoMap()
  userEntry?: User;
  @AutoMap()
  userDepartureId?: string;
  @AutoMap()
  userDeparture?: User;
  @AutoMap()
  created_at?: Date;
  @AutoMap()
  updated_at?: Date;
}
