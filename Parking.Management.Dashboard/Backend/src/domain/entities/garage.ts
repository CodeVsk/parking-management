import { Entity } from "../../core/domain/entity";

export class Garage extends Entity {
  status: number;
  collegeid: string;
  vehicleId: string;
  userEntryId: string;
  userDepartureId: string;
  entryTime: Date;
  departureTime: Date;
  created_at: Date;
  updated_at: Date;
}
