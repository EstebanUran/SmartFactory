import Header from './components/Header'
import { WorkunitCard } from './components/WorkunitCard'
import './scss/dashboard.page.scss'
import useDashboardPageViewModel from './view_model/production-monitor.page.view_model'

const ProductionMonitorPage = () => {
  const { workunits, handleBack } = useDashboardPageViewModel()

  return (
    <div className="dashboard-page">
      <Header handleBack={handleBack} />
      <div className="workunit-list">
        {workunits.map((unit) => (
          <WorkunitCard key={unit.wkucode} unit={unit} />
        ))}
      </div>
    </div>
  )
}

export default ProductionMonitorPage
