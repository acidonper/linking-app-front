import { Card } from "./Card";
import { card } from "../utils/test";

describe("Test Card Interface", () => {
  it("should instantiate a card", () => {
    let testCard: Card;
    testCard = card;

    expect(testCard).toBe(card);
  });
});
