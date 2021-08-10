FROM node:14.17.0-alpine as build-step
ARG config
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install --ignore-scripts
COPY . /app
RUN npm run build --prod

# production stage
FROM nginx:1.19.2-alpine

COPY --from=build-step /app/dist/apiYoutubeApp /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]