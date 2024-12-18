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

export function getDirection(stations: GetStations) {
  const { subwayStations } = stations;
  const { firstStation, secondStation } = getStations(stations);
  const direction =
    subwayStations.indexOf(firstStation!) -
    subwayStations.indexOf(secondStation!);
  return direction > 0 ? "South" : "North";
}

export function getDepartures(
  locationId: string,
  direction: string,
  subwayStations: Station[]
) {
  const station = subwayStations.find(
    (station) => station.id === locationId.toUpperCase()
  );
  return direction === "South"
    ? station?.departuresSouth
    : station?.departuresNorth;
}
export function getFirstDeparture(time: number, departures: number[]) {
  let closest = 60;
  let dif;
  let smallestDif = 60;
  let hour = 0;
  for (let i = 0; i < departures.length; i++) {
    dif = departures[i] - time;
    if (dif > 0 && smallestDif > dif) {
      smallestDif = dif;
      closest = departures[i];
    }
  }
  if (closest === 60) {
    return {
      departure: departures[0],
      houres: 1,
    };
  }
  return {
    departure: closest,
    houres: 0,
  };
}

export function getTimeOfArrival(
  hour: number,
  houres: number,
  departure: number,
  travelTime: number
) {
  let arrivalHour = hour + houres;
  let arrivalMinute = departure + travelTime;
  if (arrivalMinute > 60) {
    arrivalMinute -= 60;
    arrivalHour += 1;
  }
  const formatMinutes = arrivalMinute.toString().padStart(2, "0");
  return `${arrivalHour}:${formatMinutes}`;
}
