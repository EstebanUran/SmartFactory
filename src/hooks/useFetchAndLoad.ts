import { useEffect, useRef, useState } from 'react'
import type { RequestCallEntity } from '../common/infrastructure/connection/interfaces/RequestCallEntity'

const useFetchAndLoad = () => {
  // Estado para indicar si hay una petición en curso
  const [loading, setLoading] = useState(false)

  // Estado interno para llevar el conteo de peticiones pendientes
  const [_, setPendingRequests] = useState(0)

  // Referencia al AbortController para cancelar peticiones si es necesario
  const controller = useRef<AbortController | null>(null)

  /**
   * Llama a un endpoint que se define en `RequestCallEntity<T>`
   * Maneja el estado de carga y control de abort
   */
  const callEndpoint = async <T>(endpointCall: RequestCallEntity<T>): Promise<T> => {
    // Si el endpoint tiene un controlador personalizado, lo usamos
    if (endpointCall.controller) controller.current = endpointCall.controller

    // Aumenta el conteo de peticiones activas y activa loading
    setPendingRequests((prev) => prev + 1)
    setLoading(true)

    let result = {} as T
    try {
      result = await endpointCall.call // Ejecuta la llamada asíncrona
    } finally {
      // Una vez finaliza, disminuye el contador de pendientes
      setPendingRequests((prev) => {
        const newPendingRequests = prev - 1
        if (newPendingRequests === 0) {
          setLoading(false) // Solo si no quedan pendientes, desactiva loading
        }
        return newPendingRequests
      })
    }

    return result
  }

  /**
   * Cancela la petición activa (si existe) usando AbortController
   */
  const cancelEndpoint = () => {
    setLoading(false)
    if (controller.current) {
      controller.current.abort()
    }
  }

  /**
   * Al desmontar el componente que usa este hook, cancela cualquier petición activa
   */
  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  }, [])

  return {
    loading, // Estado de carga para usar en UI
    callEndpoint // Función para hacer la llamada a la API
  }
}

export default useFetchAndLoad
