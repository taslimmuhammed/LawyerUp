import express from 'express';
import path from 'path';
import discordRoute from './api/discord';
const app = express();



app.listen(4000, () => {
    console.info('Running on port 50451');
  });