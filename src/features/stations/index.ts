import { Router } from "express";
import { Station } from "../../stationDB/mockdb";
import { serviceFactory } from "./service";

export function stationsFacory(subwayStations: Station[]) {
  const service = serviceFactory(subwayStations);
  return {
    service,
    routerFatory: () => {
      const router = Router();

      router.get("/", async (req, res) => {
        res.send(await service.getAll());
      });
      router.get("/from/:locationId/to/:destinationId", async (req, res) => {
        const { locationId, destinationId } = req.params;
        const travelTime = await service.travelTime(locationId, destinationId);
        res.json({ travelTime: travelTime });
      });

      return router;
    },
  };
}
