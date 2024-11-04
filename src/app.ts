import express from "express";
import { subwayStations } from "./stationDB/mockdb";
import { stationsFactory } from "./features";
import { routeFactory } from "./features/routes";
import { favouriteRoutes } from "./features/routeDB/mockdb";

export function createApp() {
  const app = express();

  app.use(express.json());

  const stationsModule = stationsFactory(subwayStations);
  const routeModule = routeFactory(favouriteRoutes);
  app.use("/api/stations", stationsModule.routerFactory());
  app.use("/api/routes", routeModule.routerFatory());

  return app;
}
