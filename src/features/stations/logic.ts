import { GetStations, TravelTime, ValidateStations } from "./types";
import { Station } from "../../stationDB/mockdb";

export function getTravelTime(
  firstStation: Station,
  secondStation: Station,
  subwayStations: Station[]
) {
  const indexLocation = subwayStations.findIndex(
    (station) => station.id === firstStation.id
  );
  const indexDestination = subwayStations.findIndex(
    (station) => station.id === secondStation.id
  );

  const start = Math.min(indexLocation, indexDestination);
  const end = Math.max(indexLocation, indexDestination);
  return calculateTravelTime({ start, end, subwayStations });
}

export function calculateTravelTime({
  start,
  end,
  subwayStations,
}: TravelTime) {
  let time = 0;
  let nextStation = "";
  for (let i = start; i < end; i++) {
    nextStation = subwayStations[i + 1].id;
    time += subwayStations[i].relations[nextStation];
  }
  return time;
}

export function updateSection(
  firstStation: Station,
  secondStation: Station,
  newTravelTime: number
) {
  firstStation.relations[secondStation.id] = newTravelTime;
  secondStation.relations[firstStation.id] = newTravelTime;
  return "travel time updated";
}

export function deltaIndexOfStation(
  firstStation: Station,
  secondStation: Station,
  subwayStations: Station[]
) {
  const deltaIndex = Math.abs(
    subwayStations.indexOf(firstStation) - subwayStations.indexOf(secondStation)
  );
  return deltaIndex;
}

export function getStations(stationsId: GetStations) {
  const { locationId, destinationId, subwayStations } = stationsId;

  const firstStation = subwayStations.find(
    (station) => station.id === locationId.toUpperCase()
  );
  const secondStation = subwayStations.find(
    (station) => station.id === destinationId.toUpperCase()
  );

  return { firstStation, secondStation };
}

export function validateStations(stationsId: ValidateStations) {
  const { subwayStations, request } = stationsId;

  const { firstStation, secondStation } = getStations(stationsId);
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
