FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install

EXPOSE 4000

CMD ["pnpm", "start"]

