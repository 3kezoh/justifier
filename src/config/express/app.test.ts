import { app } from "@config";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

describe("The express app", () => {
  it("should respond 404 when there is no matching route", async () => {
    await request(app).get("/").expect(StatusCodes.NOT_FOUND);
  });
});
