import React, { useState, useEffect } from 'react';
import '../../styles/components/Layout/Header.css';
import '../../App.css';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


{/* <i className="fa fa-fw fa-user text-white fa-lg"></i> */ }

const Header = (props) => {

  let location = useLocation();
  let pagina = "";
  console.log("pagina actual" + location.pathname);
  if (location.pathname == '/')
    pagina = "";
  else pagina = "sub_page";


  console.log("pagina tiene " + pagina);

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const [paginaActual, setPaginaActual] = useState(false)

  //   const pagina = () => {

  //     if (location == "/")
  //       setPaginaActual("");
  //     else
  //       setPaginaActual("sub_page")
  //   }
  // console.log("pagina actual"+paginaActual);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])


  return (
    <div>
      <body className={pagina}>
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/hero-bg.jpg" alt="" />
          </div>
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>
                    Tentaciones
                  </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {(toggleMenu || screenWidth > 720) && (
                    <ul className="navbar-nav  mx-auto ">
                      {/* <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="menu.html">Menu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="book.html">Book Table</a>
                </li> */}
                      <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/">Tienda</NavLink></li>
                      {/* <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/servicios">Servicios</NavLink></li> */}
                      {/* <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/impresiones">Impresiones</NavLink></li> */}
                      <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
                      <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                      <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
                      <li className='nav-item'><NavLink className="nav-link" activeClassName='activo' exact to="/admin">Administracion</NavLink></li>
                      {/* <li className="derecha"><NavLink className="nav-link" activeClassName='activo ' exact to="/admin"><i class="fa fa-fw fa-user fa-lg"></i> Iniciar Sesion</NavLink></li> */}
                      {/* <li class="derecha"><a href="#"><i class="fa fa-fw fa-user fa-lg"></i>Iniciar Sesion</a></li> */}
                      {/* <li class="derecha"><i class="fa fa-fw fa-cart-plus fa-lg" ></i></li> */}
                    </ul>
                  )}
                  <div className="user_option">
                    <a href="" className="user_link">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <a className="cart_link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 456.029 456.029"
                        version="1.1"
                        viewBox="0 0 456.029 456.029"
                        xmlSpace="preserve"
                      >
                        <path d="M345.6 338.862c-29.184 0-53.248 23.552-53.248 53.248 0 29.184 23.552 53.248 53.248 53.248 29.184 0 53.248-23.552 53.248-53.248-.512-29.184-24.064-53.248-53.248-53.248zM439.296 84.91c-1.024 0-2.56-.512-4.096-.512H112.64l-5.12-34.304C104.448 27.566 84.992 10.67 61.952 10.67H20.48C9.216 10.67 0 19.886 0 31.15c0 11.264 9.216 20.48 20.48 20.48h41.472c2.56 0 4.608 2.048 5.12 4.608l31.744 216.064c4.096 27.136 27.648 47.616 55.296 47.616h212.992c26.624 0 49.664-18.944 55.296-45.056l33.28-166.4c2.048-10.752-5.12-21.504-16.384-23.552zM215.04 389.55c-1.024-28.16-24.576-50.688-52.736-50.688-29.696 1.536-52.224 26.112-51.2 55.296 1.024 28.16 24.064 50.688 52.224 50.688h1.024c29.184-1.536 52.224-26.112 50.688-55.296z"></path>
                      </svg>
                      {/* <i class="fa fa-fw fa-cart-plus fa-lg" ></i> */}
                    </a>
                    <form className="form-inline">
                      <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                    <a href="" className="order_online">
                      Ordenar
                    </a>
                  </div>
                </div>
              </nav>
            </div>

          </header>
          {/* <section class="slider_section ">
            <div class="container hero_area">
              <div class="row">
                <div class="col-md-7 col-lg-6 bg-box">
                  <div class="detail-box">
                    <h1>
                      Fast Food Restaurant
                    </h1>
                    <p>
                      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section> */}
        </div>
      </body>

    </div>
  );
}

export default Header;
