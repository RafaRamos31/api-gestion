import { addAldeasEndpoints } from "../src/endpoints/aldeas.js";
import { addCargosEndpoints } from "../src/endpoints/cargos.js";
import { addCaseriosEndpoints } from "../src/endpoints/caserios.js";
import { addComponentesEndpoints } from "../src/endpoints/componentes.js";
import { addDepartamentosEndpoints } from "../src/endpoints/departamentos.js";
import { addMunicipiosEndpoints } from "../src/endpoints/municipios.js";
import { addOrganizacionesEndpoints } from "../src/endpoints/organizaciones.js";
import { addRolesEndpoints } from "../src/endpoints/roles.js";
import { addTiposOrganizacionesEndpoints } from "../src/endpoints/tipos_organizaciones.js";
import {initConnection} from "./db.js";
import express from "express";
import multer from "multer";

/**
 * Separa la logica de definicion de rutas y su respuesta a peticiones REST
 * @param {express} app Un servidor inicializado de express
 * @returns El mismo objeto de servidor pero con las rutas REST definidas
 */
export function addRestDirections(app) {
  const upload = new multer();

  app = addRolesEndpoints(initConnection, app, upload);
  /*app = addComponentesEndpoints(initConnection, app);
  app = addDepartamentosEndpoints(initConnection, app);
  app = addMunicipiosEndpoints(initConnection, app);
  app = addAldeasEndpoints(initConnection, app);
  app = addCaseriosEndpoints(initConnection, app);
  app = addTiposOrganizacionesEndpoints(initConnection, app);
  app = addOrganizacionesEndpoints(initConnection, app);
  app = addCargosEndpoints(initConnection, app);*/

  return app;
}