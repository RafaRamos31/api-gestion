export function addTiposOrganizacionesEndpoints(connection, app){

  app.get("/api/torganizaciones", async (request, response) => {
    connection.query("SELECT * FROM Tipos_Organizaciones", (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/torganizaciones/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Tipos_Organizaciones WHERE ID_Tipo_Organizacion = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/torganizaciones", async (request, response) => {
    const nombre = request.body.nombre;

    connection.query('INSERT INTO Tipos_Organizaciones (nombre) VALUES ( ? )', [ nombre ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/torganizaciones", async (request, response) => {

    const id_tipo_organizacion = request.body.id_tipo_organizacion;
    const nombre = request.body.nombre;

    connection.query('UPDATE Tipos_Organizaciones SET nombre = ? WHERE ID_Tipo_Organizacion = ? ', [ nombre, id_tipo_organizacion ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/torganizaciones/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Tipos_Organizaciones WHERE ID_Tipo_Organizacion = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}