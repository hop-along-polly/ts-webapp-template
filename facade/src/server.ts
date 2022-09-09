import app from './app';
import config from 'config';

const PORT = config.get('port');

app.listen(PORT, () => {
  console.log(`⚡️[server]: listening on port ${PORT}`);
});
