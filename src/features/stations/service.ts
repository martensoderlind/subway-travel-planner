import { get } from "http";
import { Station } from "../../stationDB/mockdb";
import { GetStations, TravelTime, ValidateStations } from "./types";

function getTravelTime(
  firstStation: Station,
  secondStation: Station,
  subwayStations: Station[]
) {
  const indexLocation = subwayStations.indexOf(firstStation!);
  const indexDestination = subwayStations.indexOf(secondStation!);

  const start = Math.min(indexLocation, indexDestination);
  const end = Math.max(indexLocation, indexDestination);
  return calculateTravelTime({ start, end, subwayStations });
}

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
  return "travel time updated";
}

function deltaIndexOfStation(
  firstStation: Station,
  secondStation: Station,
  subwayStations: Station[]
) {
  const deltaIndex = Math.abs(
    subwayStations.indexOf(firstStation) - subwayStations.indexOf(secondStation)
  );
  return deltaIndex;
}

function getStations(stationsId: GetStations) {
  const { locationId, destinationId, subwayStations } = stationsId;

  const firstStation = subwayStations.find(
    (station) => station.id === locationId.toUpperCase()
  );
  const secondStation = subwayStations.find(
    (station) => station.id === destinationId.toUpperCase()
  );

  return { firstStation, secondStation };
}

function validateStations(stationsId: ValidateStations) {
  const { subwayStations, request } = stationsId;

  const { firstStation, secondStation } = getStations(stationsId);
  console.log(firstStation, secondStation);
  if (!firstStation || !secondStation) {
    return {
      message: "Try another spelling of the stations or try diffrent stations",
    };
  }

  const deltaIndex = deltaIndexOfStation(
    firstStation,
    secondStation,
    subwayStations
  );

  if (deltaIndex === 0) {
    return { message: "pick two diffrent stations" };
  }
  if (request === "patch" && deltaIndex > 1) {
    return { message: "the stations needs to be located after eachother" };
  }
  return { firstStation, secondStation };
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
