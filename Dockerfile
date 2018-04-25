# specify the node base image with your desired version node:<version>
FROM node:8.11.1
# COPY?
COPY public/
# replace this with your application's default port
EXPOSE 3002

RUN npm install 
CMD ["npm", "start"]