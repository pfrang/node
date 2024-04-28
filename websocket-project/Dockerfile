# Build the frontend
FROM node:20-alpine AS frontend
WORKDIR /app
COPY ./client .
# Copy from backend
FROM node:20-alpine AS backend
WORKDIR /app
COPY ./server .

# Final image
FROM node:20-buster-slim
# Set the working directory
WORKDIR /app

# Copy the frontend and backend
COPY --from=frontend /app ./client
COPY --from=backend /app ./server
RUN cd ./client && \
  npm i && \
  npm run build

RUN cd ./server && \
  npm i

EXPOSE 3000 8080


CMD [ "bash", "-c", "cd server && node index.js & cd client && npm run start" ]
# docker build --no-cache --build-arg WS_URL=ws://localhost:8080 -t live-cursor-app .
# docker build --build-arg WS_URL=wss://live-cursor-web-app.azurewebsites.net:8080 -t live-cursor-app .
