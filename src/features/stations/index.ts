import { Router } from "express";

export function stationsFacory() {
  return {
    routerFatory: () => {
      const router = Router();

      router.get("/", async (req, res) => {
        res.send("router factory works");
      });
      return router;
    },
  };
}
