import PropagateLoader from 'react-spinners/PropagateLoader'
import './sass/loader.scss'

const Loader = () => {
  return (
    <div className="loader-page" style={{ backgroundColor: '#000000' }}>
      <div
        className="loader-content"
        style={{
          backgroundColor: '#ffffff'
        }}
      >
        <div className="loaderMain" style={{ paddingRight: '17px' }}>
          <PropagateLoader color={'#ffff00'} loading={true} size={15} />
        </div>
      </div>
    </div>
  )
}

export default Loader
