const jsonServer = require('json-server');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server is running at ${PORT} port`);
})