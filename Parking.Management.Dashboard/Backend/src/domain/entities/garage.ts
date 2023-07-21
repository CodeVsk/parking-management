import { Entity } from "../../core/domain/entity";

type GarageProps = {
  collegeid: string;

  vehicleId: string;
  status: number;

  userEntryId: string;
  entryTime: Date;

  userDepartureId: string;
  departureTime: Date;
};

export class Garage extends Entity<GarageProps> {}
