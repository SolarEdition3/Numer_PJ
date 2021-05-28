  
FROM node:14.15

RUN mkdir /usr/src/app
WORKDIR /usr/src/app


COPY . /usr/src/app

RUN npm install


EXPOSE 3000

CMD ["npm" , "start"]

#docker run -dp 3000:3000 getting-started