FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /var/www
VOLUME .:/var/www
CMD ["npm", "run", "dev"]
EXPOSE 3000
