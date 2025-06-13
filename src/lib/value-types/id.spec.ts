import { describe, it, expect } from "vitest";
import { Id } from "./id";
import { Maybe } from "typescript-functional-extensions";

describe("Id", () => {
  it("creates a new valid Id with newId()", () => {
    const id = Id.newId();
    expect(id.idString).toMatch(
      /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
    );
    expect(id.toString()).toBe(id.idString);
  });

  it("parses a valid UUID string with dashes", () => {
    const result = Id.from(Maybe.from("123e4567-e89b-12d3-a456-426614174000"));
    expect(result.isSuccess).toBe(true);
    expect(result.getValueOrThrow().idString).toBe("123e4567-e89b-12d3-a456-426614174000");
  });

  it("parses a valid UUID string without dashes", () => {
    const result = Id.from(Maybe.from("123e4567e89b12d3a456426614174000"));
    expect(result.isSuccess).toBe(true);
    expect(result.getValueOrThrow().idString).toBe("123e4567-e89b-12d3-a456-426614174000");
  });

  it("returns error for invalid id (bad format)", () => {
    const result = Id.from(Maybe.from("bad-id"));
    expect(result.isFailure).toBe(true);
    expect(result.getErrorOrDefault("")).toBe("invalid id format");
  });

  it("returns error for empty id", () => {
    const result = Id.from(Maybe.from(""));
    expect(result.isFailure).toBe(true);
    expect(result.getErrorOrDefault("")).toBe("an id cannot be empty");
  });

  it("is case-insensitive and always lowercases", () => {
    const result = Id.from(Maybe.from("123E4567-E89B-12D3-A456-426614174000"));
    expect(result.isSuccess).toBe(true);
    expect(result.getValueOrThrow().idString).toBe("123e4567-e89b-12d3-a456-426614174000");
  });
});
