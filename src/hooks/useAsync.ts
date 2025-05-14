import { useEffect } from 'react'

export const useAsync = <T, U = unknown>(
  asyncFn: () => Promise<any>, // Función asíncrona a ejecutar
  succesFunction: (data: T, args: U) => unknown, // Callback en caso de éxito
  returnFunction: () => void = () => {}, // Función opcional de limpieza
  dependencies: any[] = [], // Dependencias del useEffect
  errorFunction: (error: unknown) => unknown = () => {}, // Callback en caso de error
  props?: U // Argumentos extra para el success
) => {
  useEffect(() => {
    let isActive = true // Para evitar actualizaciones si el componente se desmonta

    // Ejecuta la función asíncrona
    asyncFn()
      .then((result) => {
        // Si el componente sigue montado y el resultado contiene 'data', llama a success
        if (isActive && Object.prototype.hasOwnProperty.call(result, 'data')) {
          succesFunction(result.data as T, props as U)
        } else if (isActive) {
          errorFunction(result)
        }
      })
      .catch((err) => {
        // Llama al error handler si ocurre un fallo
        if (isActive) errorFunction(err)
      })

    // Cleanup function del useEffect
    return () => {
      returnFunction()
      isActive = false // Cancela futuras ejecuciones si se desmonta
    }
  }, dependencies)
}
