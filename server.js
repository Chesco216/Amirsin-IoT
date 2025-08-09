import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Crea __dirname equivalente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});
app.use('/stream', express.static(path.join(__dirname, 'stream')));

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Puerto ${PORT} en uso, probando con ${PORT + 1}`);
    app.listen(PORT + 1);
  }
});

// app.listen(PORT, () => {
//   console.log(`Servidor HLS corriendo en http://localhost:${PORT}`);
// });

// const express = require('express');
// const app = express();
// const PORT = 3001;
//
// // Habilitar CORS básico
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
//
// app.use('/stream', express.static('stream'));
//
// app.listen(PORT, () => {
//   console.log(`Servidor con CORS básico en http://localhost:${PORT}`);
// });
