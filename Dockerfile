FROM node:20.5.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-storybook

COPY . .

RUN export NODE_OPTIONS=--max_old_space_size=4096

EXPOSE 6006

CMD ["npm", "run", "storybook"]