import { Station } from "../../stationDB/mockdb";
import { TravelTime } from "./types";

function calculateTravelTime({ start, end, subwayStations }: TravelTime) {
  let time = 0;
  let nextStation = "";
  for (let i = start; i < end + 1; i++) {
    nextStation = subwayStations[i + 1].id;
    time += subwayStations[i].relations[nextStation];
  }
  return time;
}
function updateSection(
  firstStation: Station,
  secondStation: Station,
  newTravelTime: number
) {
  firstStation.relations[secondStation.id] = newTravelTime;
  secondStation.relations[firstStation.id] = newTravelTime;
  console.log(firstStation);
  console.log(secondStation);
  return "travel time updated";
}

export function serviceFactory(subwayStations: Station[]) {
  return {
    getAll: async () => {
      const stations = subwayStations.map((station) => {
        return station.namn;
      });

      return stations;
    },
    get: async (locationId: string, destinationId: string) => {
      const from = subwayStations.find(
        (station) => station.id === locationId.toUpperCase()
      );
      const to = subwayStations.find(
        (station) => station.id === destinationId.toUpperCase()
      );
      let time = 0;
      if (!from || !to) {
        return time;
      }
      const indexLocation = subwayStations.indexOf(from);
      const indexDestination = subwayStations.indexOf(to);
      if (indexLocation === indexDestination) {
        return time;
      } else if (indexLocation > indexDestination) {
        time = calculateTravelTime({
          start: indexDestination,
          end: indexLocation,
          subwayStations,
        });
      } else {
        time = calculateTravelTime({
          start: indexLocation,
          end: indexDestination,
          subwayStations,
        });
      }
      return time;
    },
    patchSection: async (
      locationId: string,
      destinationId: string,
      newTravelTime: number
    ) => {
      console.log("patch");
      const from = subwayStations.find(
        (station) => station.id === locationId.toUpperCase()
      );
      const to = subwayStations.find(
        (station) => station.id === destinationId.toUpperCase()
      );
      let message = "";
      if (!from || !to) {
        message =
          "Try another spelling of the stations or try diffrent stations";
        return message;
      }
      const indexLocation = subwayStations.indexOf(from);
      const indexDestination = subwayStations.indexOf(to);
      if (Math.abs(indexDestination - indexLocation) !== 1) {
        message = "the stations needs to be located after eachother";
        return message;
      }

      if (indexLocation > indexDestination) {
        return (message = updateSection(from, to, newTravelTime));
      }
      return (message = updateSection(to, from, newTravelTime));
    },
  };
}
