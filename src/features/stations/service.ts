import { Station } from "../../stationDB/mockdb";

export function serviceFactory(subwayStations: Station[]) {
  return {
    getAll: async () => {
      const stations = subwayStations.map((station) => {
        return station.namn;
      });

      return stations;
    },
    travelTime: async (locationId: string, destinationId: string) => {
      const from = subwayStations.find(
        (station) => station.id === locationId.toUpperCase()
      );
      const to = subwayStations.find(
        (station) => station.id === destinationId.toUpperCase()
      );

      return;
    },
  };
}
