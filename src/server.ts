import express from 'express';
import payload from 'payload';

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: "_ho_r3v8ensr8j0wgvb5nczjr27xuqhb",
    mongoURL: "mongodb://mongo:4l1VFCm4M2uKyG990Ddn@containers-us-west-161.railway.app:6854",
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    }
  })

  // Add your own express routes here

  app.get('/health', (_, res) => {
    res.sendStatus(200);
  });

  const PORT = process.env.PORT || 3000;

	app.listen(PORT);
}

start();
