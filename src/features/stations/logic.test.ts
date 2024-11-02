//functions to test
//gettraveltime
//calculateTravelTime
//update section
//deltaIndexOfStations
//getStations
//ValidateStations

import test, { describe } from "node:test";
import { subwayStations } from "../../stationDB/mockdb";
import { validateStations } from "./logic";

describe("validation ", () => {
  test.skip("travel between the same station should return: pick two diffrent stations", () => {
    const data = {
      locationId: "BAGARMOSSEN",
      destinationId: "BAGARMOSSEN",
      subwayStations: subwayStations,
      request: "get",
    };

    const result = validateStations(data);
    expect(result).toEqual({ message: "pick two diffrent stations" });
  });
  test.skip("misspelled id should return : Try another spelling of the stations or try diffrent stations", () => {
    const data = {
      locationId: "FRIDHEMSPL",
      destinationId: "BAGARMOSSEN",
      subwayStations: subwayStations,
      request: "get",
    };

    const result = validateStations(data);
    expect(result).toEqual({
      message: "Try another spelling of the stations or try diffrent stations",
    });
  });
});
