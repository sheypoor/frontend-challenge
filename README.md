[https://steady-meerkat-6f3173.netlify.app/](https://steady-meerkat-6f3173.netlify.app/)



# 2nd Solution
For my 2nd solution to the task, I provided the source code for a frontend project built with React using TypeScript. My goal in this task was to show some scaling practices in the source code of a TypeScript-based React project with the configuration of ESLint and my capability and flexibility to use some 3rd party libraries. I know the fact that using each outer library in each project is a tradeoff, but here in this project, I feel free to show you I’m flexible with a vast variety of using libraries such as MSWJS, Formik, yup, vite, Prettier, tsconfig, and of course setting a mock backend service worker to simulate accurately the fetch requests and a solid architecture for using React Query and of course using Formik and Yup for handling the 2 step wizard.


# what can i do more with this project
the time was limited in doing this task but if i had more time i could use some best practice method for this project, such as git practices like gitflow or branch per task and atomic commites and using husky for setting some precommites and post commits to run some test or linting/formmating process in each commite. 

# zilinblogbuster

This is a frontend project built with React using TypeScript. This project is fully responsive and follows best practices, utilizing modern tools and libraries such as ESLint for code linting, Atomic Design for component organization, Yarn as the package manager, Vite as the build tool, and Figma for design collaboration. The project is also optimized using memoization and callback functions to improve performance.

The tech stack includes:

- React
- React Query
- Vite
- TypeScript
- Zustand
- Tailwind
- MSW (Mock Service Worker)
- formik
- yup


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher): Visit [https://nodejs.org](https://nodejs.org) and follow the installation instructions for your operating system.

## Development

To start the development server, run the following command:

Copy code

`yarn dev`

This will launch the application in development mode. Open [http://localhost:5173](http://localhost:5173) in your browser to view it.

## Building the Project

To build a production-ready version of the application, run the following command:

Copy code

`yarn build`

This will generate an optimized build in the dist directory.

## Linting

This project utilizes ESLint for code linting. Here is the configuration used:

javascriptCopy code

`module.exports = {   env: { browser: true, es2020: true },   extends: [     'eslint:recommended',     'plugin:@typescript-eslint/recommended',     'plugin:react-hooks/recommended',   ],   parser: '@typescript-eslint/parser',   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },   plugins: ['react-refresh'],   rules: {     'react-refresh/only-export-components': 'warn',   }, }`

To run the linter, use the following command:

Copy code

`yarn lint`

## Prettier

This project uses Prettier for code formatting. Here is the configuration used:

jsonCopy code

`{   "singleQuote": true,   "semi": false,   "trailingComma": "all",   "arrowParens": "avoid",   "overrides": [     {       "files": "*.tsx",       "options": {         "parser": "typescript"       }     }   ] }`



We follow an atomic commit strategy, which involves breaking down changes into small, self-contained units of work. Each commit represents a single logical change or feature.

## Folder Structure and Architecture

The project follows a modular and scalable folder structure to organize the codebase effectively. Here's an overview of the folder structure:

- **assets**: Contains static assets used in the application (e.g., icons, pictures).
- **components**: Contains reusable React components used throughout the application.
  - **button**, **link**, **login**, **modal**, **postcard**, **search**, **input**, **utils**
  - **layout**: Contains the layout components.
    - **breadcrumb**, **header**, **footer**
  - **lazyLoadImage**: A component for lazy loading images.
- **constants**: Contains application-wide constants.
- **interfaces**: Contains types and interfaces for TypeScript.
- **hooks**: Contains React Query fetching and custom hooks.
- **mocks**: Contains handlers for the Mock Service Worker (MSW).
- **pages**: Contains the page-level components that represent different views of the application.
- **router**: Contains the React Router setup.
- **store**: Contains the Zustand state management setup.

This folder structure helps to keep the codebase organized, promotes reusability, and makes it easier to navigate and maintain the project as it grows.

## MSW (Mock Service Worker)

This project uses MSW for mocking backend responses, providing an interface to test under various scenarios without the need for an actual backend.

Here is an example configuration:

javascriptCopy code

`export const handlers = [   rest.get('http://localhost:3000/api/posts', (req, res, ctx) => {     // handler logic   }),   rest.post('http://localhost:3000/api/login', (req, res, ctx) => {     // handler logic   }),   rest.get('http://localhost:3000/api/user', (req, res, ctx) => {     // handler logic   }), ]`

This config includes handlers for fetching posts and user data, and for simulating the authentication process.

## VS Code Extensions

To enhance your development experience and maintain consistent coding standards, this project includes a set of recommended Visual Studio Code extensions. The extensions listed below are configured in the `.vscode` folder of this project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

These extensions provide essential functionalities for linting, code formatting, React Native development, debugging, auto-importing modules, styling components, and Git integration.

To make the most of these recommended extensions, open the project in Visual Studio Code, and if prompted, consider installing the recommended extensions. Alternatively, you can manually install them from the links provided above.
