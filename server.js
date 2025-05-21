const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para productos
app.get('/api/productos', (req, res) => {
  res.json([
    {
      "Código del producto": "FER-12345",
      "Marca": "Bosch",
      "Código": "BOS-67890",
      "Nombre": "Taladro Percutor Bosch",
      "Precio": [
        {
          "Fecha": "2023-05-10T03:00:00.000Z",
          "Valor": 89090.99
        }
      ]
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
