// 📦 Importación de librerías externas
import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'

// 🧱 Componentes propios
import { lazyMinLoadTime } from '../common/presentation/components/loader/LazyLoad'
import Loader from '../common/presentation/components/loader/Loader'
import RoutesWithNotFound from './RoutesWithNotFound.utility'

// Tiempo mínimo de espera para el lazy loading (por ejemplo, para simular carga)
const SLEEP = 1000

// 💤 Lazy load de las páginas con retardo mínimo (mejor UX)
const HomePage = lazyMinLoadTime(() => import('../app/presentation/pages/home/home.page'), SLEEP)
const DashboardPage = lazyMinLoadTime(
  () => import('../app/presentation/pages/production-monitor/production-monitor.page'),
  SLEEP
)

// Definición del enrutador principal
const MainRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          {/* Redirección raíz hacia /home */}
          <Route path="/" element={<Navigate replace to="home" />} />
          {/* Página principal */}
          <Route path="home" element={<HomePage />} />
          {/* Página de monitoreo de producción con parámetro dinámico */}
          <Route path="production-monitor/:id" element={<DashboardPage />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default MainRouter
