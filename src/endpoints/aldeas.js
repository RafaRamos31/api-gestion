export function addAldeasEndpoints(connection, app){

  app.get("/api/aldeas/:id", async (request, response) => {
    const {id} = request.params;

    connection.query("SELECT * FROM Aldeas WHERE ID_Municipio = ?", [ id ], (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/aldea/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Aldeas WHERE ID_Aldea = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/aldeas", async (request, response) => {
    const nombre = request.body.nombre;
    const id_municipio = request.body.id_municipio;
    const geocode = request.body.geocode;

    connection.query('INSERT INTO Aldeas (nombre, ID_Municipio, geocode) VALUES ( ?, ?, ?)', 
    [ nombre, id_municipio, geocode ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/aldeas", async (request, response) => {

    const id_aldea = request.body.id_aldea;
    const nombre = request.body.nombre;
    const id_municipio = request.body.id_municipio;
    const geocode = request.body.geocode;

    connection.query('UPDATE Aldeas SET nombre = ?, ID_Municipio = ?, geocode = ? WHERE ID_Aldea = ?', 
    [ nombre, id_municipio, geocode, id_aldea ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/aldeas/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Aldeas WHERE ID_Aldea = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}