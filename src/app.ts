import express from "express";
import { subwayStations } from "./stationDB/mockdb";
export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send(subwayStations);
  });

  return app;
}
