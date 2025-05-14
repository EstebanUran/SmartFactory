interface HeaderProps {
  handleBack: () => void
}

const Header = ({ handleBack }: HeaderProps) => (
  <header className="header">
    <button className="back" onClick={handleBack}>
      Regresar
    </button>
    <h1 className="header__title">Monitor Producción</h1>
    <img
      src="https://www.taismartfactory.com/wp-content/uploads/2021/01/TAI_smartfactory_blue_big_flat.png"
      alt="tai smart factory"
      className="header__logo"
    />
  </header>
)
export default Header
