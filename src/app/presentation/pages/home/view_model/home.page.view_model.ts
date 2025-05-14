import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAsync } from '../../../../../hooks/useAsync'
import useFetchAndLoad from '../../../../../hooks/useFetchAndLoad'
import type { ApiResponse } from '../../../../domain/shared.types'
import { HomeConnectionRepository } from '../../../../infrastructure/connection/home/HomeConnectionRepository'

// Hook personalizado para la lógica de la vista de Home
const useHomeViewModel = () => {
  // Hook para navegación programática entre rutas
  const navigate = useNavigate()

  // Instancia del repositorio que maneja la lógica de conexión para Home
  const homeConnectionRepository = new HomeConnectionRepository()

  // Hook que permite gestionar la carga y llamada al endpoint
  const { callEndpoint: callEndpointGetDataApi, loading: isLoading } = useFetchAndLoad()

  // Wrapper para llamar al método del repositorio
  const callGetGetDataApi = () => callEndpointGetDataApi(homeConnectionRepository.getDataApi())

  // Estado para guardar la respuesta de la API
  const [dataApi, setDataApi] = useState<ApiResponse>()

  // Adaptador de datos para guardar la respuesta de la API en el estado local
  const adapterDataApi = (data: ApiResponse) => {
    setDataApi(data)
  }

  // Función para cargar datos desde un archivo JSON local (ej. desde public/assets/json/data.json)
  const fetchJson = async () => {
    try {
      const response = await axios.get('/assets/json/data.json') // Ruta relativa al archivo en public
      setDataApi(response.data) // Guardamos el JSON en el estado
    } catch (error) {
      console.error('Error al cargar el JSON:', error)
    }
  }

  // Hook que ejecuta la llamada a la API de forma asíncrona cuando el componente se monta y
  // si falla hace el fetch del JSON
  useAsync(callGetGetDataApi, adapterDataApi, () => {}, [], fetchJson)

  // Retornamos los datos y el estado de carga para usarlos en la vista
  return { dataApi, isLoading, navigate }
}

export default useHomeViewModel
