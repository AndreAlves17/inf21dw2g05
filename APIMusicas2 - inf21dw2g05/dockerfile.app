FROM node:17
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3006
USER node
CMD ["npm", "start"]
