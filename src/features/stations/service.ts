import { Station } from "../../stationDB/mockdb";

export function serviceFactory(subwayStations: Station[]) {
  return {
    getAll: async () => {
      return subwayStations;
    },
  };
}
