const jsonServer = require('json-server');
const dotenv = require('dotenv');
dotenv.config();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8080
console.log(`ENV PORT: ${process.env.PORT}`);
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running at ${PORT} port`);
})