export function addMunicipiosEndpoints(connection, app){

  app.get("/api/municipios/:id", async (request, response) => {
    const {id} = request.params;

    connection.query("SELECT * FROM Municipios WHERE ID_Departamento = ?", [ id ], (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/municipio/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Municipios WHERE ID_Municipio = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/municipios", async (request, response) => {
    const nombre = request.body.nombre;
    const id_departamento = request.body.id_departamento;
    const geocode = request.body.geocode;

    connection.query('INSERT INTO Municipios (nombre, ID_Departamento, geocode) VALUES ( ?, ?, ?)', 
    [ nombre, id_departamento, geocode ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/municipios", async (request, response) => {

    const id_municipio = request.body.id_municipio;
    const nombre = request.body.nombre;
    const id_departamento = request.body.id_departamento;
    const geocode = request.body.geocode;

    connection.query('UPDATE Municipios SET nombre = ?, ID_Departamento = ?, geocode = ? WHERE ID_Municipio = ?', 
    [ nombre, id_departamento, geocode, id_municipio ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/municipios/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Municipios WHERE ID_Municipio = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}