import express from "express";
import { subwayStations } from "./stationDB/mockdb";
import { createStationsRouter } from "./features";
import { createFavouriteRouteRouter } from "./features/routes";
import { favouriteRoutes } from "./features/routeDB/mockdb";

export function createApp() {
  const app = express();

  app.use(express.json());

  const stationsModule = createStationsRouter(subwayStations);
  const routeModule = createFavouriteRouteRouter(favouriteRoutes);
  app.use("/api/stations", stationsModule.routerFactory());
  app.use("/api/routes", routeModule.routerFatory());

  return app;
}
