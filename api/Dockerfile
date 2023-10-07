FROM node:18-alpine

WORKDIR /app

COPY . .

RUN pnpm install

EXPOSE 4000

CMD ["pnpm", "start"]

