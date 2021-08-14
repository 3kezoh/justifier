import { Line } from "./Line";

describe("Line Class", () => {
  const line = new Line();

  describe("constructor", () => {
    it("should be new instance of Line", () => {
      expect(line).toBeInstanceOf(Line);
      expect(line.words).toBeInstanceOf(Array);
      expect(line.words).toHaveLength(0);
      expect(line.length).toEqual(0);
    });
  });

  describe("push", () => {
    it("should append words and add its length", () => {
      line.push("word");
      line.push("word");
      line.push("word");
      expect(line.words).toHaveLength(3);
      expect(line.length).toEqual(12);
    });
  });

  describe("pop", () => {
    it("should remove the last word and subtract its length", () => {
      line.pop();
      expect(line.words).toHaveLength(2);
      expect(line.length).toEqual(8);
    });
  });

  describe("addRandomSpace", () => {
    it("should add one or more space at a random position (except the last)", () => {
      line.addRandomSpace(5);
      expect(line.words[0]).toEqual("word     ");
    });
  });

  describe("enlargeSpace", () => {
    it("should add 1 space at every impair position", () => {
      line.enlargeSpace();
      expect(line.words[1]).toEqual("word ");
    });
  });

  describe("toString", () => {
    it("should return a string representing the words array", () => {
      expect(line.toString()).toEqual("word     word ");
    });
  });
});
