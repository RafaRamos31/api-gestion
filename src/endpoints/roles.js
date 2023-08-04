export function addRolesEndpoints(initConnection, app, upload){

  app.get("/api/roles", async (request, response) => {
    let connection
    try {
      connection = await initConnection();
    } catch (error) {
      response.status(500).json('' + error);
      return
    }

    try {
      const [results, fields] = await connection.query("SELECT * FROM Roles");
      response.status(200).json(results);
    } catch (error) {
      response.status(500).json(error);
    } finally {
      connection.end();
    }
  })

  app.get("/api/rol", async (request, response) => {
    response.status(200).json('testing');
  })

  app.get("/api/roles/:id", async (request, response) => {
    const {id} = request.params;
    const connection = await initConnection();
    try {
      const [results, fields] = await connection.query('SELECT * FROM Roles WHERE ID_Rol = ?', [ id ]);
      response.status(200).json(results);
    } catch (error) {
      response.status(500).json(error);
    } finally {
      connection.end();
    }
  })

  app.post("/api/roles", upload.any(), async (request, response) => {
    const nombre = request.body.nombre;

    const connection = await initConnection();
    try {
      const [results, fields] = await connection.query('INSERT INTO Roles (nombre) VALUES ( ? )', [ nombre ] );
      response.status(200).json(results);
    } catch (error) {
      response.status(500).json(error);
    } finally {
      connection.end();
    }
  })

  app.put("/api/roles", upload.any(), async (request, response) => {
    const idRol = request.body.idRol;
    const nombre = request.body.nombre;

    const connection = await initConnection();
    try {
      const [results, fields] = await connection.query('UPDATE Roles SET nombre = ? WHERE ID_Rol = ? ', [ nombre, idRol ] );
      response.status(200).json(results);
    } catch (error) {
      response.status(500).json(error);
    } finally {
      connection.end();
    }
  })


  app.delete("/api/roles/:id", async (request, response) => {
    const {id} = request.params;

    const connection = await initConnection();
    try {
      const [results, fields] = await connection.query('DELETE FROM Roles WHERE ID_Rol = ?', [ id ]);
      response.status(200).json(results);
    } catch (error) {
      response.status(500).json(error);
    } finally {
      connection.end();
    }
  })

  return app;
}