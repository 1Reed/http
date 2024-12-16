require('dotenv').config();

const express = require('express');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// PostgreSQL Verbindung einrichten
const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', async (req, res) => {
  try {
    const query = 'SELECT * FROM studentData';
    const result = await client.query(query);
//  console.log("Querry Result:")
    console.log(result)
    res.json(result.rows);
  } catch (err) {
    console.error('Fehler beim Abrufen der Daten', err.stack);
    res.status(500).send('Fehler beim Abrufen der Daten');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});