//functions to test
//gettraveltime
//calculateTravelTime
//update section
//deltaIndexOfStations
//getStations
//ValidateStations

import test, { describe } from "node:test";
import { Station, subwayStations } from "../../stationDB/mockdb";
import { calculateTravelTime, getTravelTime, validateStations } from "./logic";
import request from "supertest";
import { createApp } from "../../app";

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
  test.skip("when index diffrens is more then one, return: the stations needs to be located after eachother", () => {
    const data = {
      locationId: "FRIDHEMSPLAN",
      destinationId: "BAGARMOSSEN",
      subwayStations: subwayStations,
      request: "patch",
    };

    const result = validateStations(data);
    expect(result).toEqual({
      message: "the stations needs to be located after eachother",
    });
  });
});

describe("Calculate travelTime", () => {
  test("travel between bagarmossen and kärrtorp should take 2 min", async () => {
    const app = createApp();

    const result = await request(app).get(
      "/api/stations/from/bagarmossen/to/kärrtorp"
    );
    const { text } = result;
    console.log(text);
    expect(parseInt(text)).toEqual(2);
  });
  test("travel between bagarmossen and slussen should take 16 min", async () => {
    const app = createApp();

    const result = await request(app).get(
      "/api/stations/from/bagarmossen/to/slussen"
    );
    const { text } = result;
    console.log(text);
    expect(parseInt(text)).toEqual(16);
  });
});
