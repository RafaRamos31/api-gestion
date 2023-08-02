export function addRolesEndpoints(connection, app, upload){

  app.get("/api/roles", async (request, response) => {
    connection.query("SELECT * FROM Roles", (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/roles/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Roles WHERE ID_Rol = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/roles", upload.any(), async (request, response) => {
    const nombre = request.body.nombre;

    connection.query('INSERT INTO Roles (nombre) VALUES ( ? )', [ nombre ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/roles", upload.any(), async (request, response) => {

    const idRol = request.body.idRol;
    const nombre = request.body.nombre;

    connection.query('UPDATE Roles SET nombre = ? WHERE ID_Rol = ? ', [ nombre, idRol ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })


  app.delete("/api/roles/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Roles WHERE ID_Rol = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}