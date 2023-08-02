export function addCargosEndpoints(connection, app){

  app.get("/api/cargos/:id", async (request, response) => {
    const {id} = request.params;

    connection.query("SELECT * FROM Cargos WHERE ID_Organizacion = ?", [ id ], (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/cargo/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Cargos WHERE ID_Cargo = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/cargos", async (request, response) => {
    const nombre = request.body.nombre;
    const idOrganizacion = request.body.idOrganizacion;

    connection.query('INSERT INTO Cargos (nombre, ID_Organizacion) VALUES ( ?, ?)', 
    [ nombre, idOrganizacion ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/cargos", async (request, response) => {

    const nombre = request.body.nombre;
    const idOrganizacion = request.body.idOrganizacion;
    const idCargo = request.body.idCargo;

    connection.query('UPDATE Cargos SET nombre = ?, ID_Organizacion = ? WHERE ID_Cargo = ?', 
    [ nombre, idOrganizacion, idCargo ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/cargos/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Cargos WHERE ID_Cargo = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}