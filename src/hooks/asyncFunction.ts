// Función utilitaria genérica para manejar promesas con funciones de éxito y error
export const asyncFunction = <T, U = unknown>(
  asyncFn: () => Promise<any>, // Función asíncrona que devuelve una promesa
  succesFunction: (data: T, args: U) => unknown, // Función a ejecutar si la promesa resuelve
  errorFunction: (error: unknown) => unknown = () => {}, // Función a ejecutar si ocurre un error
  props?: U // Argumentos adicionales para pasar al success
) => {
  asyncFn()
    .then((result) => {
      // Verifica si el resultado tiene propiedad 'data' y ejecuta la función de éxito
      if (Object.prototype.hasOwnProperty.call(result, 'data')) {
        succesFunction(result.data as T, props as U)
      }
    })
    .catch((err) => {
      // Ejecuta la función de error (si existe)
      errorFunction(err)
    })
}
