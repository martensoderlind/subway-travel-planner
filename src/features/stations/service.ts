import { Station } from "../../stationDB/mockdb";
import {
  getDepartures,
  getDirection,
  getTravelTime,
  updateSection,
  validateStations,
} from "./logic";

export function serviceFactory(subwayStations: Station[]) {
  return {
    getAll: async () => {
      const stations = subwayStations.map((station) => {
        return station.name;
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
      const hour = new Date().getHours;
      const direction = getDirection({
        locationId,
        destinationId,
        subwayStations,
      });
      const departures = getDepartures(locationId, direction, subwayStations);
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
