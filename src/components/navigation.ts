export const routes = {
  step1: document.getElementById("step1")!,
  step2: document.getElementById("step2")!,
  step3: document.getElementById("step3")!,
};

export function navigate(route: keyof typeof routes) {
  if (!routes[route]) route = "step1"; // Default route for invalid routes

  Object.keys(routes).forEach((routeKey) => {
    if (routeKey === route) {
      setTimeout(() => {
        routes[routeKey as keyof typeof routes].classList.remove("hidden");
      }, 500);
    } else {
      routes[routeKey as keyof typeof routes].classList.add("hidden");
    }
  });

  window.history.pushState({}, "", `/${route}`);
}
