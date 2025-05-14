import React from 'react'
import './scss/not-found.scss'
interface NotFoundProps {
  handleBack: () => void
}

const NotFound: React.FC<NotFoundProps> = ({ handleBack }) => {
  return (
    <section className="notFoundPageDefault">
      <article className="containerNotFound">
        <div className="containerNotFound-action">
          <button className="button-back" onClick={handleBack}>
            {'Regresar'}
          </button>
        </div>
        <div className="containerNotFound-illustation">
          <img src={'/assets/icons/not-found.svg'} alt="illustration-not-found" />
        </div>
      </article>
    </section>
  )
}

export default NotFound
