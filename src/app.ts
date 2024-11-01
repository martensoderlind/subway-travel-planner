import express from "express";
import { subwayStations } from "./stationDB/mockdb";
import { stationsFacory } from "./features";
export function createApp() {
  const app = express();

  app.use(express.json());

  const stationsModule = stationsFacory(subwayStations);
  app.use("/api/stations", stationsModule.routerFatory());

  return app;
}
