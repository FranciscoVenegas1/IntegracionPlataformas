const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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
    },
    {
      "Código del producto": "MAN-54321",
      "Marca": "Stanley",
      "Código": "STA-12345",
      "Nombre": "Martillo de acero Stanley",
      "Precio": [
        {
          "Fecha": "2023-05-15T03:00:00.000Z",
          "Valor": 15200.50
        }
      ]
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
