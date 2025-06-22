const pool = require('./db'); // Asegúrate de que tu db.js exporta el pool

const correo = 'valeria.lopez@ladystardust.com'; // cambia por un correo real que tengas en tu tabla
const contrasena = 'contrasenaEncriptada123'; // cambia por la contraseña real

const query = `
  SELECT * FROM MAE_Usuario 
  WHERE correo_electronico = $1 
    AND contrasena = $2 
    AND estado = true
`;

pool.query(query, [correo, contrasena], (err, res) => {
  if (err) {
    console.error('Error al consultar:', err);
  } else {
    if (res.rows.length > 0) {
      console.log('Login exitoso:', res.rows[0]);
    } else {
      console.log('Correo o contraseña incorrectos');
    }
  }
  pool.end();
});
