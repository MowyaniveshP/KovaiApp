export class EventModel {
  guid!: string;
  id!: number;
  name!: string;
  description!: string;
  slug!: string;
  image!: string;
  startsAt!: string;
  endsAt!: string;
  timezone!: string;
  locationId!: number;
  location!: Location;
  url!: string;
  info!: string;
}
