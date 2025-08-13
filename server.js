import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';


// 1. Crea el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Configura Express
const app = express();
const PORT = 3001;

// 3. Middleware CORS (opcional)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// 4. Verifica/Crea la carpeta stream
const streamDir = path.join(__dirname, 'stream');
if (!fs.existsSync(streamDir)) {
  fs.mkdirSync(streamDir);
}

// 5. Sirve los archivos HLS
app.use('/stream', express.static(streamDir));

// 6. Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor HLS en http://localhost:${PORT}`);
});

const ffmpeg = spawn('ffmpeg', [
  '-rtsp_transport', 'tcp',
  '-i', 'rtsp://192.168.1.9',
  '-c:v', 'libx264',
  '-preset', 'ultrafast',
  '-f', 'hls',
  '-hls_time', '2',
  path.join(streamDir, 'stream.m3u8')
]);

ffmpeg.stderr.on('data', (data) => {
  console.error(`FFmpeg: ${data}`);
});

ffmpeg.on('close', (code) => {
  console.log(`FFmpeg finalizado con código ${code}`);
});

// 8. Manejo de cierre limpio
process.on('SIGINT', () => {
  ffmpeg.kill();
  process.exit();
});
