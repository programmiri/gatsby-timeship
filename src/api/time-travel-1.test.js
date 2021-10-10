const fetch = require(`node-fetch`);

const host = "http://localhost:8000";

describe("time-travel-1", () => {
  it("returns the right value", async () => {
    const res = await fetch(`${host}/api/time-travel-1`);
    const result = await res.text();

    expect(result).toEqual("You time-travelled to Bergen, in year 2022");
  });
});
