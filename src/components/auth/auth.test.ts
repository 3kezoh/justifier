import { app } from "@config";
import { jwt } from "@config/env";
import { setupMongoose } from "@test";
import { user } from "@test/mocks";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import request from "supertest";
import { EMAIL } from "./errors";

setupMongoose();

describe("/auth", () => {
  describe("/token (POST)", () => {
    it("should respond 200 with an access token", async () => {
      const { body, status } = await request(app).post("/auth/token").send(user);
      expect(status).toBe(StatusCodes.OK);
      expect(() => verify(body.accessToken, jwt.secret)).not.toThrow();
    });

    it.each([3, "user@gmail"])("should respond 422 if the email is %s", async (email) => {
      const { body, status } = await request(app).post("/auth/token").send({ email });
      expect(status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
      expect(body).not.toHaveProperty("accessToken");
      expect(body.errors).toEqual([
        { value: email, msg: EMAIL.INVALID, param: "email", location: "body" },
      ]);
    });
  });
});
