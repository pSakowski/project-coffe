import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const publicPath = new URL('../dist', import.meta.url).pathname;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(publicPath, 'contact.html'));
});

app.get('/products.html', (req, res) => {
  res.sendFile(path.join(publicPath, 'products.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
