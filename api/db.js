import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
// Configura los detalles de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.SQL_HOST,   // Dirección del servidor de la base de datos
  user: process.env.SQL_USER,         // Nombre de usuario de la base de datos
  password: process.env.SQL_PASSWORD,  // Contraseña de la base de datos
  database: process.env.SQL_DATABASE    // Nombre de la base de datos
});

// Conecta a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
});

export default connection;