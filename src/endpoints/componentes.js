export function addComponentesEndpoints(connection, app){

  app.get("/api/componentes", async (request, response) => {
    connection.query("SELECT * FROM Componentes", (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/componentes/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM Componentes WHERE ID_Componente = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/componentes", async (request, response) => {
    const nombre = request.body.nombre;

    connection.query('INSERT INTO Componentes (nombre) VALUES ( ? )', [ nombre ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.put("/api/componentes", async (request, response) => {

    const id_componente = request.body.id_componente;
    const nombre = request.body.nombre;

    connection.query('UPDATE Componentes SET nombre = ? WHERE ID_Componente = ? ', [ nombre, id_componente ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.delete("/api/componentes/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM Componentes WHERE ID_Componente = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}