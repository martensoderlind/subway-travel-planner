import express from "express";
import { subwayStations } from "./stationDB/mockdb";
import { stationsFacory } from "./features";
import { routeFacory } from "./features/routes";
import { favouriteRoutes } from "./features/routeDB/mockdb";

export function createApp() {
  const app = express();

  app.use(express.json());

  const stationsModule = stationsFacory(subwayStations);
  const routeModule = routeFacory(favouriteRoutes);
  app.use("/api/stations", stationsModule.routerFatory());
  app.use("/api/routes", routeModule.routerFatory());

  return app;
}
