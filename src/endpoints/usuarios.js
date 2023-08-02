export function addUsuariosEndpoints(connection, app){

  app.get("/api/organizaciones", async (_, response) => {
    connection.query("SELECT * FROM organizaciones", (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.get("/api/organizaciones/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('SELECT * FROM organizaciones WHERE ID_Organizacion = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/organizaciones/filter", async (request, response) => {
    const tipo = request.body.tipo;
    const nivel = request.body.nivel;
    const departamento = request.body.departamento;
    const municipio = request.body.municipio;
    const aldea = request.body.aldea;
    const caserio = request.body.caserio;

    let previous = false;
    let filter = "";
    if(tipo || nivel || departamento || municipio || aldea || caserio){
      filter = ' WHERE ';
    }

    if(tipo){
      filter = filter + `ID_Tipo_Organizacion = ${tipo} `
      previous = true;
    }

    if(nivel){
      filter = previous ? filter + " AND " : filter;
      filter = filter + `nivel_organizacion = ${nivel} `;
      previous = true;
    }

    if(departamento){
      filter = previous ? filter + " AND " : filter;
      filter = filter + `ID_Departamento = ${departamento} `;
      previous = true;
    }

    if(municipio){
      filter = previous ? filter + " AND " : filter;
      filter = filter + `ID_Municipio = ${municipio} `;
      previous = true;
    }

    if(aldea){
      filter = previous ? filter + " AND " : filter;
      filter = filter + `ID_Aldea = ${aldea} `;
      previous = true;
    }

    if(caserio){
      filter = previous ? filter + " AND " : filter;
      filter = filter + `ID_Caserio = ${caserio} `;
    }

    connection.query('SELECT * FROM organizaciones ' + filter,
    [ tipo, nivel, departamento, municipio, aldea, caserio] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  app.post("/api/organizaciones", async (request, response) => {
    const codigo = request.body.codigo;
    const nombre = request.body.nombre;
    const tipoOrganizacion = request.body.tipoOrganizacion;
    const nivelOrganizacion = request.body.nivelOrganizacion;
    const departamento = request.body.departamento;
    const municipio = request.body.municipio;
    const aldea = request.body.aldea;
    const caserio = request.body.caserio;
    const telefonoInst = request.body.telefonoInst;
    const nombreContacto = request.body.nombreContacto;
    const telefonoContacto = request.body.telefonoContacto;
    const correoContacto = request.body.correoContacto;

    connection.query(
      'INSERT INTO organizaciones (codigo_organizacion, ID_Tipo_Organizacion, nivel_organizacion, '
                                +'nombre, ID_Departamento, ID_Municipio, ID_Aldea, ID_Caserio, '
                                +'telefono_inst, nombre_contacto, telefono_contacto, correo_contacto) '
                                +'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                                [ codigo, tipoOrganizacion, nivelOrganizacion, nombre, departamento,
                                  municipio, aldea, caserio, telefonoInst, nombreContacto, telefonoContacto,
                                  correoContacto ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })


  app.put("/api/organizaciones", async (request, response) => {
    const codigo = request.body.codigo;
    const nombre = request.body.nombre;
    const tipoOrganizacion = request.body.tipoOrganizacion;
    const nivelOrganizacion = request.body.nivelOrganizacion;
    const departamento = request.body.departamento;
    const municipio = request.body.municipio;
    const aldea = request.body.aldea;
    const caserio = request.body.caserio;
    const telefonoInst = request.body.telefonoInst;
    const nombreContacto = request.body.nombreContacto;
    const telefonoContacto = request.body.telefonoContacto;
    const correoContacto = request.body.correoContacto;
    const idOrganizacion = request.body.idOrganizacion;

    connection.query(
      'UPDATE organizaciones SET codigo_organizacion = ?, ID_Tipo_Organizacion = ?, nivel_organizacion = ?, '
                                +'nombre = ?, ID_Departamento = ?, ID_Municipio = ?, ID_Aldea = ?, ID_Caserio = ?, '
                                +'telefono_inst = ?, nombre_contacto = ?, telefono_contacto = ?, correo_contacto = ? '
                                +' WHERE ID_Organizacion = ?', 
                                [ codigo, tipoOrganizacion, nivelOrganizacion, nombre, departamento,
                                  municipio, aldea, caserio, telefonoInst, nombreContacto, telefonoContacto,
                                  correoContacto, idOrganizacion ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })


  app.delete("/api/organizaciones/:id", async (request, response) => {
    const {id} = request.params;

    connection.query('DELETE FROM organizaciones WHERE ID_Organizacion = ?', [ id ] , (error, results) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(results);
      }
    });
  })

  return app;
}