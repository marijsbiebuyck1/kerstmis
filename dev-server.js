// Simple static server so `npm run dev` works without external dependencies.
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 5173;
const root = process.cwd();

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  try {
    const requested = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(root, requested);

    // if path is directory, serve index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      // fallback to index.html (SPA-friendly)
      filePath = path.join(root, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';

    const stream = fs.createReadStream(filePath);
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
    stream.pipe(res);
    stream.on('error', (err) => {
      res.writeHead(500);
      res.end('Server error');
      console.error(err);
    });
  } catch (err) {
    res.writeHead(500);
    res.end('Server error');
    console.error(err);
  }
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});
