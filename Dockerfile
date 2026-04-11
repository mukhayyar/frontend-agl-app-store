# Next.js 15 store frontend
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then \
        npm i -g pnpm && pnpm install --frozen-lockfile; \
    else \
        npm ci --legacy-peer-deps; \
    fi

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Enable standalone output for minimal image
RUN node -e "const fs=require('fs'); const nc=require('./next.config.ts'); console.log('ok')" 2>/dev/null || true
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]
