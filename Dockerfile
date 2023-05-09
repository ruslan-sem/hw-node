FROM  node
WORKDIR /node
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server" ]
