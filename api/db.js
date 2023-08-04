import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configura los detalles de la conexión a la base de datos
export const initConnection = async () => {
  try{
    const connection = await mysql2.createConnection({
      host: process.env.SQL_HOST,   //Dirección del servidor de la base de datos
      user: process.env.SQL_USER,         // Nombre de usuario de la base de datos
      password: process.env.SQL_PASSWORD,  // Contraseña de la base de datos
      database: process.env.SQL_DATABASE    // Nombre de la base de datos
    })
    return connection;
  }
  catch(error){
    throw new Error('Error al tratar de conectarse a la Base de datos: ' + error.code);
  }
}