// import of external libraries
import { useNavigate } from 'react-router-dom'

const useNotFoundViewModel = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/home')
    return
  }

  return {
    handleBack
  }
}

export default useNotFoundViewModel
