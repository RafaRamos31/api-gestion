/**
 * Separa la logica de definicion de rutas y su respuesta a peticiones REST
 * @param {express} app Un servidor inicializado de express
 * @returns El mismo objeto de servidor pero con las rutas REST definidas
 */
export function addRestDirections(app) {

  app.get("/api/test", (request, response) => {
    response.status(200).json({ param: 'hola' });
  })

  return app;
}