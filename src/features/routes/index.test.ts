import test, { describe } from "node:test";
import request from "supertest";
import { createApp } from "../../app";
import { favouriteRoutes } from "../routeDB/mockdb";

describe("Favourite routes", () => {
  test.skip("favourite routes to have one input", async () => {
    const app = createApp();

    const response = await request(app)
      .get("/api/routes/")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body).toHaveLength(1);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "b922b09e-09e6-4bb8-a6a2-3b80197188ab",
          from: "Bagarmossen",
          to: "Fridhemsplan",
          travelTime: 30,
        }),
      ])
    );
  });
  test.skip("should successfully create a new route", async () => {
    const app = createApp();
    const newFavouriteRoute = {
      from: "Bagarmossen",
      to: "Slussen",
      time: 16,
    };

    const response = await request(app)
      .post("/api/routes/")
      .send(newFavouriteRoute);

    expect(favouriteRoutes.length).toBe(1);
  });
});
