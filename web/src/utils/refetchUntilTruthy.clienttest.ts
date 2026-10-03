import { refetchUntilTruthy } from "@/src/utils/refetchUntilTruthy";

const queryWithData = (data: unknown) => ({ state: { data } });

describe("refetchUntilTruthy", () => {
  it("polls while the query has no data yet", () => {
    expect(refetchUntilTruthy(10_000)(queryWithData(undefined))).toBe(10_000);
  });

  it("keeps polling while the answer is still false", () => {
    expect(refetchUntilTruthy(10_000)(queryWithData(false))).toBe(10_000);
  });

  it("stops polling once the answer is truthy", () => {
    expect(refetchUntilTruthy(10_000)(queryWithData(true))).toBe(false);
  });
});
