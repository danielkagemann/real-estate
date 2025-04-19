FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY .next ./.next
COPY public ./public
COPY package.json ./package.json
COPY node_modules ./node_modules
COPY next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]