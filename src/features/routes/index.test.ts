import test, { describe } from "node:test";
import request from "supertest";
import { createApp } from "../../app";

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
  test("delete should make the db shorter", async () => {
    const app = createApp();

    const response = await request(app)
      .get("/api/routes/")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body).toHaveLength(1);

    const deleteResponse = await request(app)
      .delete("/api/routes/b922b09e-09e6-4bb8-a6a2-3b80197188ab")
      .expect(200);

    const response2 = await request(app)
      .get("/api/routes/")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response2.body).toHaveLength(0);
  });
});
