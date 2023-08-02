import { addAldeasEndpoints } from "../src/endpoints/aldeas.js";
import { addCargosEndpoints } from "../src/endpoints/cargos.js";
import { addCaseriosEndpoints } from "../src/endpoints/caserios.js";
import { addComponentesEndpoints } from "../src/endpoints/componentes.js";
import { addDepartamentosEndpoints } from "../src/endpoints/departamentos.js";
import { addMunicipiosEndpoints } from "../src/endpoints/municipios.js";
import { addOrganizacionesEndpoints } from "../src/endpoints/organizaciones.js";
import { addRolesEndpoints } from "../src/endpoints/roles.js";
import { addTiposOrganizacionesEndpoints } from "../src/endpoints/tipos_organizaciones.js";
import connection from "./db.js";
import express from "express";
import multer from "multer";

/**
 * Separa la logica de definicion de rutas y su respuesta a peticiones REST
 * @param {express} app Un servidor inicializado de express
 * @returns El mismo objeto de servidor pero con las rutas REST definidas
 */
export function addRestDirections(app) {
  const upload = new multer();

  app = addRolesEndpoints(connection, app, upload);
  app = addComponentesEndpoints(connection, app);
  app = addDepartamentosEndpoints(connection, app);
  app = addMunicipiosEndpoints(connection, app);
  app = addAldeasEndpoints(connection, app);
  app = addCaseriosEndpoints(connection, app);
  app = addTiposOrganizacionesEndpoints(connection, app);
  app = addOrganizacionesEndpoints(connection, app);
  app = addCargosEndpoints(connection, app);

  return app;
}