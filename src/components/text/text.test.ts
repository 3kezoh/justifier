/* eslint-disable no-await-in-loop */
import { app } from "@config";
import { accessToken, setupMongoose, setupUser } from "@test";
import { StatusCodes } from "http-status-codes";
import { LoremIpsum } from "lorem-ipsum";
import MockDate from "mockdate";
import ms from "ms";
import request from "supertest";

setupMongoose();
setupUser();

afterEach(() => {
  MockDate.reset();
});

const lorem = new LoremIpsum();

/**
 * Sends `n` words to /api/justify
 * @param n
 * @param subtype subtypes for the text MIME type
 * @param token the access token to use in the Authorization header
 * @returns
 */

const justify = (n: number, subtype?: string, token?: string) =>
  request(app)
    .post("/api/justify")
    .set("Content-Type", subtype ?? "text/plain")
    .set("Authorization", `Bearer ${token ?? accessToken}`)
    .send(lorem.generateWords(n));

describe("/api", () => {
  describe("/justify (POST)", () => {
    it("should respond 200 with the justified text", async () =>
      justify(500).expect(StatusCodes.OK));

    it.each(["javascript", "html", "css"])(
      "should respond 415 when the Content-Type isn't text/plain",
      async (subtype) => justify(500, subtype).expect(StatusCodes.UNSUPPORTED_MEDIA_TYPE),
    );

    it("should respond 401 if the user is not authenticated", async () =>
      justify(1, undefined, "token").expect(StatusCodes.UNAUTHORIZED));

    it("should permits 80 000 words per sliding day", async () => {
      MockDate.set(0);

      for (let i = 0; i < 4; i += 1) {
        await justify(10_000).expect(StatusCodes.OK);
      }

      MockDate.set(ms("12h"));

      for (let i = 0; i < 4; i += 1) {
        await justify(10_000).expect(StatusCodes.OK);
      }

      await justify(1).expect(StatusCodes.PAYMENT_REQUIRED);

      MockDate.set(ms("24h"));

      for (let i = 0; i < 4; i += 1) {
        await justify(10_000).expect(StatusCodes.OK);
      }

      await justify(1).expect(StatusCodes.PAYMENT_REQUIRED);
    });
  });
});
