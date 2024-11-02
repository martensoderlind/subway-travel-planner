import { Station } from "../../stationDB/mockdb";
import { getTravelTime, updateSection, validateStations } from "./logic";

export function serviceFactory(subwayStations: Station[]) {
  return {
    getAll: async () => {
      const stations = subwayStations.map((station) => {
        return station.namn;
      });

      return stations;
    },

    get: async (locationId: string, destinationId: string) => {
      const request = "get";
      const stations = validateStations({
        locationId,
        destinationId,
        subwayStations,
        request,
      });
      if (stations.message) {
        return stations.message;
      }
      const { firstStation, secondStation } = stations;
      return getTravelTime(firstStation!, secondStation!, subwayStations);
    },

    patchSection: async (
      locationId: string,
      destinationId: string,
      newTravelTime: number
    ) => {
      const request = "patch";
      const stations = validateStations({
        locationId,
        destinationId,
        subwayStations,
        request,
      });
      if (stations.message) {
        return stations.message;
      }
      const { firstStation, secondStation } = stations;

      return updateSection(firstStation!, secondStation!, newTravelTime);
    },
  };
}
