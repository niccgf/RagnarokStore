import icono from './icono.svg'
import iconPerson from './person-circle.svg'
import CartWidget from '../components/CartWidget'

 let styleIcono = {
   width:"50px",
   height:"50px"
 }

 let styleIconPerson = {
   width:"20px",
   height:"20px"
 }
 
function NavBar() {
    return(
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none icon-padding">
                <img src={icono} alt="icono" style={styleIcono}/>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 selected">Inicio</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Productos</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Quiénes Somos</a></li>
              <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Buscar..." aria-label="Search" />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-warning me-2"><img src={iconPerson} alt="iconPerson" style={styleIconPerson}/></button>
              {/* Acá abajo llamo a la función IconoCarrito para que se haga el display del ícono de carrito adentro del botón */}
              <CartWidget />
            </div>
          </div>
        </div>
      </header>
    )
}

export default NavBar;


