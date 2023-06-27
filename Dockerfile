FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY ./src ./src
COPY ./public ./public
COPY tsconfig.json ./

RUN npm install \
    && npm install -g serve \
    && npm run build 

EXPOSE 3000

CMD ["npm", "run", "start"]