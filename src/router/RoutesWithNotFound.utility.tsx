import type { JSX } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../common/presentation/components/not-found/not-found.page'

// Props esperados: una lista de elementos <Route /> como children
interface Props {
  children: JSX.Element[] | JSX.Element
}

// Componente que encapsula las rutas y añade una ruta catch-all (404)
const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      {/* Ruta catch-all para manejar páginas no encontradas */}
      <Route path="*" key="404" element={<NotFoundPage />} />
    </Routes>
  )
}

export default RoutesWithNotFound
