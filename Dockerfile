FROM node:latest
WORKDIR /node
RUN git clone https://github.com/pwasystem/ninja.git .
RUN npm install
EXPOSE 80
CMD ["node","index.js"]