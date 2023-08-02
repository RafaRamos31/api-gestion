export function addCaseriosEndpoints(connection, app){

  app.get("/api/caserios/:id", async (request, response) => {
    const {id} = request.params;

    connection.query("SELECT * FROM Caserios WHERE ID_Aldea = ?", [ id ], (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/caserio/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Caserios WHERE ID_Caserio = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/caserios", async (request, response) => {
    const nombre = request.body.nombre;
    const id_aldea = request.body.id_aldea;
    const geocode = request.body.geocode;

    connection.query('INSERT INTO Caserios (nombre, ID_Aldea, geocode) VALUES ( ?, ?, ?)', 
    [ nombre, id_aldea, geocode ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/caserios", async (request, response) => {

    const id_caserio = request.body.id_caserio;
    const nombre = request.body.nombre;
    const id_aldea = request.body.id_aldea;
    const geocode = request.body.geocode;

    connection.query('UPDATE Caserios SET nombre = ?, ID_Aldea = ?, geocode = ? WHERE ID_Caserio = ?', 
    [ nombre, id_aldea, geocode, id_caserio ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/caserios/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Caserios WHERE ID_Caserio = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}