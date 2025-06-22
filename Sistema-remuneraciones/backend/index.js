// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // ← conexión a PostgreSQL
const app = express();
const PORT = 3001;

// Middleware para permitir solicitudes desde otros orígenes y parsear JSON
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
  const { correo_electronico, contrasena } = req.body;

  try {
    const consulta = await pool.query(
      'SELECT * FROM MAE_Usuario WHERE correo_electronico = $1 AND contrasena = $2 AND estado = true',
      [correo_electronico, contrasena]
    );

    if (consulta.rows.length > 0) {
      console.log('Consulta exitosa:', consulta.rows[0]); // ← agrega esto
      res.json({
        mensaje: 'Inicio de sesión exitoso',
        token: 'tokenEjemplo123',
        usuario: consulta.rows[0],
      });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error en /login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});


// Iniciar servidor en el puerto 3001
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

