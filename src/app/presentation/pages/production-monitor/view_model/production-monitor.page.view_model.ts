import { useLocation, useNavigate } from 'react-router-dom'
import type { PayloadItem } from '../../../../domain/shared.types'

const useDashboardPageViewModel = () => {
  // Hook para navegación programática entre rutas
  const navigate = useNavigate()

  // Extraemos el estado que viene con la navegación (en este caso, el objeto `area`)
  const {
    state: { area }
  }: {
    state: {
      area: PayloadItem // Esperamos un objeto de tipo PayloadItem (que contiene `workunits`)
    }
  } = useLocation()

  // Función para volver a la página de inicio (usada por un botón "Regresar")
  const handleBack = () => {
    navigate('/home')
  }

  // Retornamos los workunits del área seleccionada y la función para retroceder
  return { workunits: area.workunits, handleBack }
}

export default useDashboardPageViewModel
