import { agent } from "@test";
import { StatusCodes } from "http-status-codes";

describe("The express app", () => {
  it("should respond 404 when there is no matching route", async () => {
    await agent.get("/").expect(StatusCodes.NOT_FOUND);
  });
});
