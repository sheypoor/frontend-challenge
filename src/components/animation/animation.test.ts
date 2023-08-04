import { animate } from "./index";

jest.useFakeTimers();

describe("animate function", () => {
  const outClass = "out-class";
  const inClass = "in-class";

  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");
    element.classList.add("active", outClass);
  });

  test("correctly animates an element", () => {
    animate(element, outClass, inClass);

    expect(element.classList.contains("active")).toBe(false);
    expect(element.classList.contains(outClass)).toBe(false);

    jest.advanceTimersByTime(500);

    expect(element.classList.contains(inClass)).toBe(true);

    jest.advanceTimersByTime(20);

    expect(element.classList.contains("active")).toBe(true);
  });

  test("does nothing when called with null", () => {
    animate(null, outClass, inClass);
    jest.runAllTimers();
    // No error should have been thrown
  });
});
