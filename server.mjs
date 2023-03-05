import path from 'path';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router(path.join('app.json'));
const middlewares = jsonServer.defaults({
  noCors: true
});

// Serve static content from the dist folder
// eslint-disable-next-line no-undef
server.use(jsonServer.static(path.join(__dirname, 'dist')));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;
