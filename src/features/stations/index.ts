import { Router } from "express";
import { Station } from "../../stationDB/mockdb";
import { serviceFactory } from "./service";
import { travelschema } from "./input";

export function stationsFactory(subwayStations: Station[]) {
  const service = serviceFactory(subwayStations);
  return {
    service,
    routerFactory: () => {
      const router = Router();

      router.get("/", async (req, res) => {
        res.send(await service.getAll());
      });
      router.get("/from/:locationId/to/:destinationId", async (req, res) => {
        const { locationId, destinationId } = req.params;

        const result = travelschema.safeParse({ locationId, destinationId });
        if (!result.success) {
          res.status(400).json(result.error.issues[0].message);
          return;
        }

        const travelTime = await service.get(locationId, destinationId);
        res.json(travelTime);
      });

      router.patch("/from/:locationId/to/:destinationId/", async (req, res) => {
        const { locationId, destinationId } = req.params;
        const { newTravelTime } = req.body;

        const result = travelschema.safeParse({ locationId, destinationId });
        if (!result.success) {
          res.status(400).json(result.error.issues[0].message);
          return;
        }

        const sectionUpdate = await service.patchSection(
          locationId,
          destinationId,
          newTravelTime
        );
        res.json({ message: sectionUpdate });
      });

      return router;
    },
  };
}
