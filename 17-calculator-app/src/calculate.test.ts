import { test, expect } from "vitest";
import { calculate } from "./calculate";

test("It handles addition", () => {
  expect(calculate("2+2+8")).toBe(12);
});

test("It handles substraction", () => {
  expect(calculate("8-4-2")).toBe(2);
});

test("It handles multiplication", () => {
  expect(calculate("5x2x2")).toBe(20);
});

test("It handles division", () => {
  expect(calculate("10/2/2")).toBe(2.5);
});

test("It limits results to 5 decimal places", () => {
  expect(calculate("22/3")).toBe(7.33333);
});

test("It handles multiple operations", () => {
  expect(calculate("5+9/14x2")).toBe(6.28571);
});

test("It handles decimals without the leading zero", () => {
  expect(calculate(".2x3")).toBe(0.6);
});

test("It handles numbers with trailing decimal separator", () => {
  expect(calculate("2.x3")).toBe(6);
});

test("It handles negative numbers", () => {
  expect(calculate("-5+10")).toBe(5);
});

test("It handles negative results", () => {
  expect(calculate("5-10")).toBe(-5);
});
