const app = require('./server.js')
const port = 3000;

app.listen(port, () => {
  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
