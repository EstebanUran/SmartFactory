import './scss/home.page.scss'
import useHomeViewModel from './view_model/home.page.view_model'

const HomePage = () => {
  const { dataApi, isLoading, navigate } = useHomeViewModel()

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Factory Overview</h1>
        <img
          src="https://www.taismartfactory.com/wp-content/uploads/2021/01/TAI_smartfactory_blue_big_flat.png"
          alt="tai smart factory"
          className="header__logo"
        />
      </div>

      {!isLoading ? (
        <div className="home__grid">
          {dataApi?.Payload.map((area) => (
            <div
              key={area.sbacode}
              className="card"
              onClick={() => navigate(`/production-monitor/${area.sbacode}`, { state: { area } })}
            >
              <h2 className="card__title">{area.plnname}</h2>
              <p className="card__item">
                <span>Code:</span> {area.plncode}
              </p>
              <p className="card__item">
                <span>Area:</span> {area.sbaname}
              </p>
              <p className="card__item card__item--time">Time: {area.sbatime} mins</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="home__loading">Loading...</p>
      )}
    </div>
  )
}

export default HomePage
