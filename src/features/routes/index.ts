import { Router } from "express";
import { serviceFactory } from "./service";
import { FavouriteRoutes } from "../routeDB/mockdb";

export function routeFacory(favouriteRoutes: FavouriteRoutes[]) {
  const service = serviceFactory(favouriteRoutes);
  return {
    service,
    routerFatory: () => {
      const router = Router();

      router.get("/", async (req, res) => {
        res.send(await service.getAll());
      });
      router.delete("/:id", async (req, res) => {});
      router.post("/", async (req, res) => {});

      return router;
    },
  };
}
