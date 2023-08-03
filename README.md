# Sheypoor frontend-challenge

# Frontend Challenge: Pure JavaScript/TypeScript Solution

## Technology Stack

The solution is built with pure TypeScript and uses Parcel as a bundler, which provides simplicity and speed for this project. TypeScript is a strongly typed superset of JavaScript, which brings powerful type-checking and object-oriented programming capabilities to the language. This choice helps ensure code quality, ease of refactoring, and a more intuitive developer experience.

The `"dependencies"` section of the `package.json` contains `sdk` and `parcel-bundler`. The `sdk` dependency is a local package responsible for providing the necessary functions to interact with the server, while `parcel-bundler` allows us to bundle our TypeScript and other resources in a seamless manner.

The `"devDependencies"` section contains `@babel/core` and `typescript`. `@babel/core` is used by Parcel under the hood for JavaScript transformations, while `typescript` is used to enable TypeScript features in the project.

## Project Structure and Code Explanation

The folder structure is divided into separate files that each manage a specific concern, following a modular architecture. The main file is `app.ts`, which is responsible for the overall flow of the application, using functions from the rest of the project's modules to achieve its requirements.

### Modules

**Navigation module**: This module contains logic related to navigation between different steps of the form. It exports the `navigate` function, which changes the visibility of the different steps based on the argument it receives.

**DOM module**: This module contains utility functions for manipulating the DOM, including getting elements, modifying classes, and getting input values.

**Animation module**: This module is used for managing animations during transitions between steps.

**User module**: This module contains the User interface and `createUser` function. The `createUser` function calls the SDK to create a user on the server and returns the user object and a token.

## User Authentication Process

The authentication process in this application is executed by saving and retrieving user data (tokens and user information) from local storage.

When a user submits their information using the form provided on the second step, these data are sent to the server using the `createUser()` function from the SDK. Once the server confirms the creation of a new user, the application receives a token, which is then stored in local storage together with the user's details.

Here is the relevant section of the code from the `app.ts` file:

tsCopy code

`try {   const { user, token } = await createUser(details);   localStorage.setItem("user", JSON.stringify(user));   localStorage.setItem("token", token);   //... } catch (error) {   alert("There was an error creating the user"); }`

Local storage in a web application allows the storage of data that persists even after the browser window is closed. Storing the token received from the server in local storage enables the application to "remember" the user's logged-in status between sessions.

In this application, we use the token and user information saved in local storage to automatically log the user in if they are already authenticated. When the application is loaded, it checks whether a token and user information are stored in local storage:

tsCopy code

`const userItem = localStorage.getItem("user"); const tokenItem = localStorage.getItem("token");  if (userItem && tokenItem) {   // User is authenticated, load their data }`

If these items exist, it means that the user is authenticated and their details are retrieved and displayed. This helps provide a seamless user experience by eliminating the need for users to log in every time they access the application.

The logout process involves removing these items from local storage:

tsCopy code

`getElement("logout")?.addEventListener("click", () => {   localStorage.removeItem("user");   localStorage.removeItem("token");   //... });`

By removing the token and user details, we ensure that the user will need to authenticate again during their next session, thereby logging them out of the application.

### CSS

The CSS for this project is designed to make the form responsive and appealing. It is divided into global styles, form styles, loader styles, and animations. The variables at the top allow easy theming and style changes.

## Why Pure TypeScript

This project was implemented with pure TypeScript to showcase the potential of the language without any frameworks or libraries. This approach has several benefits:

- **Performance**: Without the overhead of a library or framework, the project is lightweight and loads faster.
- **Control**: It provides total control over every aspect of the code, which can sometimes be limited in a framework.
- **Learning**: Writing in pure TypeScript is an excellent exercise to understand the language deeply.

Despite the power of TypeScript, building larger projects without a framework could lead to challenges in managing state and side-effects, where frameworks like React could help. Nonetheless, for this task, TypeScript alone provides all the necessary features.
