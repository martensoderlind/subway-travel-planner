import { Station } from "../../stationDB/mockdb";
import { travelschema } from "./input";
import {
  getFirstDeparture,
  getDepartures,
  getDirection,
  getTravelTime,
  updateSection,
  validateStations,
  getTimeOfArrival,
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
      const { firstStation, secondStation } = stations;

      const direction = getDirection({
        locationId,
        destinationId,
        subwayStations,
      });

      const departures = getDepartures(locationId, direction, subwayStations);

      const travelTime = getTravelTime(
        firstStation!,
        secondStation!,
        subwayStations
      );
      const hour = new Date().getHours();
      const minutes = new Date().getMinutes();
      const { departure, houres } = getFirstDeparture(minutes, departures!);
      const timeOfArrival = getTimeOfArrival(
        hour,
        houres,
        departure,
        travelTime
      );
      return {
        Departure_Time: `${hour + houres}:${departure}`,
        Travel_Time: travelTime,
        Arrival_time: timeOfArrival,
      };
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
