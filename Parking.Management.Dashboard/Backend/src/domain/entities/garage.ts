import { Entity } from "../../core/domain/entity";

type GarageProps = {
  vehicleId: string;
  status: number;
  garageNoteId: string;

  userEntryId: string;
  entryTime: Date;

  userDepartureId: string;
  departureTime: Date;
};

export class Garage extends Entity<GarageProps> {}
