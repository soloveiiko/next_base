FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM base AS test
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
CMD ["npm", "run", "test"]

FROM base AS staging
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
EXPOSE ${PORT}
CMD ["npm", "run", "start:staging"]

FROM base AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
EXPOSE ${PORT}
CMD ["npm", "run", "start:production"]
