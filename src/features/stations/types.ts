import { Station } from "../../stationDB/mockdb";

export type TravelTime = {
  start: number;
  end: number;
  subwayStations: Station[];
};

export type GetStations = {
  locationId: string;
  destinationId: string;
  subwayStations: Station[];
};

export type ValidateStations = {
  locationId: string;
  destinationId: string;
  subwayStations: Station[];
  request: string;
};
