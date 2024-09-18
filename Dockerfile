FROM node:lts-alpine

WORKDIR /app
COPY . .
RUN rm -rf sandbox
RUN rm -rf node_modules
RUN npm install
RUN npm run build
RUN npm run react:tv

WORKDIR ./sandbox/tailwind-variants
RUN npm install

EXPOSE 8088
CMD [ "npm", "run", "dev" ]