FROM node:18.17.1-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

# Im not building the project as it needs to setup nginx and customize it to be compatible with vite, due to this issue: https://stackoverflow.com/questions/74982873/vite-react-js-with-react-router-dom-gives-404-error-on-page-reload