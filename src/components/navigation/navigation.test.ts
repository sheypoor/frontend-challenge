import { getRoutes, navigate } from "./index";

describe("navigate function", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Use fake timers

    document.body.innerHTML = `
    <div id="step1" class="hidden"></div>
    <div id="step2" class="hidden"></div>
    <div id="step3" class="hidden"></div>
    `;

    const routes = getRoutes();

    window.history.replaceState({}, "", "/");
    Object.keys(routes).forEach((route) => {
      routes[route].classList.add("hidden");
    });
  });

  test("navigates to valid route", () => {
    navigate("step1");

    jest.runAllTimers(); // Execute all timers

    const routes = getRoutes();
    expect(routes.step1.classList.contains("hidden")).toBe(false);
    expect(window.location.pathname).toBe("/step1");
  });

  test("navigates to invalid route", () => {
    navigate("invalid" as any);

    jest.runAllTimers(); // Execute all timers

    const routes = getRoutes();
    expect(routes.step1.classList.contains("hidden")).toBe(false);
    expect(window.location.pathname).toBe("/step1");
  });

  // Add more tests as needed
});
