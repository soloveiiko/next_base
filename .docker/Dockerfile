FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_ENV=production
ARG APP_ENV
RUN npm run build:$APP_ENV

FROM base AS test
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
CMD ["npm", "run", "test"]

FROM base AS staging
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.staging ./.env.staging
COPY --from=builder /app/next.config.mjs ./next.config.mjs
EXPOSE ${PORT}
CMD ["npm", "run", "start:staging"]

FROM base AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./.env.production
COPY --from=builder /app/next.config.mjs ./next.config.mjs
EXPOSE ${PORT}
CMD ["npm", "run", "start:production"]