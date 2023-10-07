FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm
RUN npm install -g nodemon

COPY . .

RUN pnpm install

EXPOSE 4000

CMD ["pnpm", "start"]

