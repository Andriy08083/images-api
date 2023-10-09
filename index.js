const app = require('./src/app');

const config = require('./src/config');

const { port } = config;

app.listen(port, () => {
  console.info(`🎉🎉🎉 Application running on port: ${port} 🎉🎉🎉`);
});
