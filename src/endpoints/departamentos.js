export function addDepartamentosEndpoints(connection, app){

  app.get("/api/departamentos", async (request, response) => {
    connection.query("SELECT * FROM Departamentos", (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/departamentos/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Departamentos WHERE ID_Departamento = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/departamentos", async (request, response) => {
    const nombre = request.body.nombre;
    const geocode = request.body.geocode;

    connection.query('INSERT INTO Departamentos (nombre, geocode) VALUES ( ? , ?)', [ nombre, geocode ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/departamentos", async (request, response) => {

    const id_departamento = request.body.id_departamento;
    const nombre = request.body.nombre;
    const geocode = request.body.geocode;

    connection.query('UPDATE Departamentos SET nombre = ? , geocode = ? WHERE ID_Departamento = ? ', 
    [ nombre, geocode, id_departamento ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/departamentos/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Departamentos WHERE ID_Departamento = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}