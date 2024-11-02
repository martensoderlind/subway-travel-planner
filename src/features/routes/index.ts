import { Router } from "express";
import { serviceFactory } from "./service";
import { FavouriteRoutes } from "../routeDB/mockdb";
import { v4 } from "uuid";
import { deleteSchema, postSchema } from "./input";

export function routeFacory(favouriteRoutes: FavouriteRoutes[]) {
  const service = serviceFactory(favouriteRoutes);
  return {
    service,
    routerFatory: () => {
      const router = Router();

      router.get("/", async (req, res) => {
        res.send(await service.getAll());
      });
      router.delete("/:id", async (req, res) => {
        const id = req.params.id;
        const result = deleteSchema.safeParse({ id });
        if (!result.success) {
          res.status(400).json(result.error.issues[0].message);
        }
        res.send(await service.delete(id));
      });

      router.post("/", async (req, res) => {
        const { from, to, time } = req.body;
        const result = postSchema.safeParse(req.body);
        if (!result.success) {
          res.status(400).json(result.error.issues[0].message);
        }
        const id = v4();
        res.send(await service.post({ id, from, to, travelTime: time }));
      });

      return router;
    },
  };
}
