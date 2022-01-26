import icono from './icono.svg'
import iconPerson from './person-circle.svg'

// En estos dos let, defino los atributos de mi ícono de carrito de compras

let atributosIconoCarrito = {
    xmlns:"http://www.w3.org/2000/svg",
    width:"20",
    height:"20",
    fill:"currentColor",
    className:"bi bi-basket",
    viewBox:"0 0 16 16"
}

let pathIconoCarrito = {
    d: "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
}

let styleIcono = {
  width:"50px",
  height:"50px"
}

let styleIconPerson = {
  width:"20px",
  height:"20px"
}

// Declaro la función IconoCarrito unicamente para el ícono

function IconoCarrito() {
    return(
        <svg {...atributosIconoCarrito}>
            <path {...pathIconoCarrito}>
            </path>
        </svg>
    )
}

// Importo un navbar de bootstrap

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
              <button type="button" className="btn btn-light">{IconoCarrito()}</button>   
            </div>
          </div>
        </div>
      </header>
    )
}

export default NavBar;


