const express = require('express');
const app = express();
const cors = require('cors');
const productos = require('./productos.json');

app.use(cors());

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});