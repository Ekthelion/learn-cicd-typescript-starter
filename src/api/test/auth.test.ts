import { describe, it, expect } from "vitest";
import { getAPIKey } from "../auth";

describe("get API key", () => {
  it("should return the API key", () => {
    const headers = {
      authorization: "ApiKey 1234567890",
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("123456789");
  });
});
