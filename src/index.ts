// app.ts
import { User } from "./components/user";
import { createUser } from "../sdk";
import { navigate } from "./components/navigation";
import { getElement, addClass, removeClass, getValue } from "./components/dom";
import { animate } from "./components/animation";

// Event listeners
const illustrationDiv = getElement("illustration");
addClass("illustration", "active");

getElement("next")?.addEventListener("click", () => {
  const name = getValue("name");
  const age = getValue("age");

  if (!name || !age) {
    addClass("name", "invalid");
    addClass("age", "invalid");
    return;
  }

  removeClass("name", "invalid");
  removeClass("age", "invalid");
  navigate("step2");
  animate(illustrationDiv, "illustration-step1", "illustration-step2");
});

getElement("back")?.addEventListener("click", () => {
  animate(illustrationDiv, "illustration-step2", "illustration-step1");
  navigate("step1");
});

getElement("form2")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = getValue("email");
  const newsletter = getValue("newsletter");
  animate(illustrationDiv, "illustration-step2", "illustration-step3");

  if (!email) {
    addClass("email", "invalid");
    return;
  }

  const details: User = {
    name: getValue("name") ?? "",
    age: getValue("age") ?? "",
    email,
    newsletter,
  };

  removeClass("loader", "hidden");

  try {
    const { user, token } = await createUser(details);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    const userDetailsHTML = `
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
      <p>Email: ${user.email}</p>
      <p>Newsletter: ${user.newsletter}</p>
    `;

    const userDetailsElement = getElement("userDetails");
    if (userDetailsElement) {
      userDetailsElement.innerHTML = userDetailsHTML;
    }
    navigate("step3");
  } catch (error) {
    alert("There was an error creating the user");
  } finally {
    addClass("loader", "hidden");
    animate(illustrationDiv, "illustration-step2", "illustration-step3");
  }
});

window.onpopstate = () => {
  const path = window.location.pathname.replace("/", "");
  if (path === "step1" || path === "step2" || path === "step3") {
    navigate(path);
  }
};

getElement("logout")?.addEventListener("click", () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  ["name", "age", "email", "newsletter"].forEach(
    (id) => ((getElement(id) as HTMLInputElement)!.value = "")
  );

  navigate("step1");
  animate(illustrationDiv, "illustration-step3", "illustration-step1");
});

const userItem = localStorage.getItem("user");
const tokenItem = localStorage.getItem("token");

if (userItem && tokenItem) {
  const user = JSON.parse(userItem) as User;

  const userDetailsHTML = `
    <p>Name: ${user.name}</p>
    <p>Age: ${user.age}</p>
    <p>Email: ${user.email}</p>
    <p>Newsletter: ${user.newsletter}</p>
  `;

  const userDetailsElement = getElement("userDetails");
  if (userDetailsElement) {
    userDetailsElement.innerHTML = userDetailsHTML;
  }
  navigate("step3");
} else {
  navigate("step1");
}

window.addEventListener("mousemove", (event) => {
  const elements = document.querySelectorAll(".moveWithMouse");

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;
    const moveX = (event.clientX * -1) / 50;
    const moveY = (event.clientY * -1) / 50;

    htmlElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
