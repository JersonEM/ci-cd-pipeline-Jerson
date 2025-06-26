const express = require('express');
const app = express();
const calc = require('./calculator');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

app.get('/suma', (req, res) => {
  const { a, b } = req.query;
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  const result = calc.sumar(numA, numB);
  res.json({ resultado: result });
});


app.get('/resta', (req, res) => {
  const { a, b } = req.query;
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  const result = calc.restar(numA, numB);
  res.json({ resultado: result });
});

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

module.exports = app;
