import type { ComponentType } from 'react'
import { lazy } from 'react'

/**
 * Carga perezosa de componentes con un tiempo mínimo artificial de carga.
 * Útil para mostrar consistentemente el loader y evitar parpadeos.
 *
 * @param factory - función que importa dinámicamente el componente
 * @param minLoadTimeMs - duración mínima en milisegundos para simular carga (default: 2000ms)
 * @returns un componente React lazy cargado después del tiempo mínimo
 */
export const lazyMinLoadTime = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  minLoadTimeMs = 1000
) =>
  lazy(
    () =>
      Promise.all([
        factory(), // carga real del componente
        new Promise((resolve) => setTimeout(resolve, minLoadTimeMs)) // retraso artificial
      ]).then(([moduleExports]) => moduleExports) // devuelve el módulo cargado
  )
