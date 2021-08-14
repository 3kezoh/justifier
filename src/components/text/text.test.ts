import { agent, setupMongoose } from "@test";
import { lorem } from "@test/mocks";
import { StatusCodes } from "http-status-codes";

setupMongoose();

describe("/api", () => {
  describe("/justify (POST)", () => {
    it("should response 200 with the justified text", async () => {
      const { status } = await agent
        .post("/api/justify")
        .set({ "Content-Type": "text/plain" })
        .send(lorem);
      expect(status).toBe(StatusCodes.OK);
    });

    it.each(["javascript", "html", "css"])(
      "should response 415 when the Content-Type isn't text/plain",
      async (subtype) => {
        const { status } = await agent
          .post("/api/justify")
          .set({ "Content-Type": `text/${subtype}` })
          .send(lorem);
        expect(status).toBe(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
      },
    );
  });
});
