export function addRolesEndpoints(connection, app){

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

  app.post("/api/roles", async (request, response) => {
    const nombre = request.body.nombre;

    connection.query('INSERT INTO Roles (nombre) VALUES ( ? )', [ nombre ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/roles", async (request, response) => {

    const id_rol = request.body.id_rol;
    const nombre = request.body.nombre;

    connection.query('UPDATE Roles SET nombre = ? WHERE ID_Rol = ? ', [ nombre, id_rol ] , (error, results) => {
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