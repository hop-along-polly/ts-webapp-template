import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import routes from '@routes';

const app: Express = express();
app.use(express.json());

// Enable CORS support
const corsOptions = {
  credentials: true,
  origin: [/localhost/],
};
app.use(cors(corsOptions));

// Add API Routes
app.use('/api', routes);

if (process.env.NODE_ENV === 'development') {
  console.log('Setting up /docs route');
  const apiYml = YAML.load('src/docs/api.yml');
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiYml));
}

// Serve React UI from Express.
app.use(express.static(path.join(__dirname, 'ui')));

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

export default app;
