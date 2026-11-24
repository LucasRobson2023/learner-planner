import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.DATABRICKS_APP_PORT || process.env.PORT || 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Example API route your frontend calls
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  // Placeholder response so you can test end-to-end immediately.
  // Later, replace this with a fetch() call to:
  // `${process.env.DATABRICKS_HOST}/serving-endpoints/${process.env.AGENT_ENDPOINT_NAME}/invocations`
  res.json({
    reply: `Agent received: "${message}" (Host: ${process.env.DATABRICKS_HOST || 'local'})`
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});