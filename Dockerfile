FROM  node:12
WORKDIR /usr/src/node-clean-tdd
COPY ./package.json .
RUN npm install --only=prod
