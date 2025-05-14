// components
import NotFound from './components/NotFound'

// styles
import useNotFoundViewModel from './view-model/not-found.view-model'

const NotFoundPage = () => {
  const { handleBack } = useNotFoundViewModel()

  return <NotFound handleBack={handleBack} />
}

export default NotFoundPage
