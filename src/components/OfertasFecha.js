import React, { useEffect, useState } from "react";
const axios = require('axios').default;

const OfertaFecha = (props) => {

    const [loading, setLoading] = useState(false);
    const [oferta, setOferta] = useState([]);

    useEffect(() => {
        const cargarOferta = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/ofertas`);
            setOferta(response.data);
            setLoading(false);
        }
        cargarOferta();
    }, []);

    var titulo = "";
    var cuerpo = "";
    const filtered = oferta.filter(function(element){
        
        if (element.tipo == 'principal') 
        {titulo = element.titulo
        cuerpo = element.cuerpo}
        return {titulo, cuerpo}
          });

// console.log(titulo);          

    return (
        <div class="container col-sm-12 my-1">
            <section className= "offer_section layout_padding-bottom">
        <div className="offer_container  user_option">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mx-4 p-2">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Juves de Tentaciones
                    </h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="" className="order_online">
                      Ordenar
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
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mx-4 p-2">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      {titulo}
                    </h5>
                    <h6>
                      <span>{cuerpo}</span> 
                    </h6>
                    <a href="" className="order_online">
                      Ordenar
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>)
}

export default OfertaFecha;