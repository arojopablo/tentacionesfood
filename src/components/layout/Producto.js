import React from "react";
import Card from 'react-bootstrap/Card';
import '../../styles/components/Layout/producto.css';
import e from "cors";


const Producto = (props) => {
    let { imagen, name, price, description, observation } = props;
    if (imagen == '') { imagen = "https://as2.ftcdn.net/v2/jpg/00/35/60/57/1000_F_35605714_q3vtD3pB6TShEkNErwlEfaot2VOwLsV2.jpg" }

    return (
        <div className="col-sm-6 col-lg-4">
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="filters-content">
                        <div className="row grid">
                            <div className="all">
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src={imagen} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {name}
                                            </h5>
                                            <p>
                                                {description}
                                                {observation}
                                            </p>
                                            <div className="options">
                                                <h6>
                                                    $ {price}
                                                </h6>
                                                <a href="">
                                                    {/* {(e) => Icon()} */}
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
                            {/* <div className='col-md-3 mb-4'>  */}
                            {/* <Card style={{ width: '18em' }}> */}
                            {/* <Card>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <Card.Text>                            
                            <p>"Todos nuestros productos tienen garantia"</p>
                            <p>Descripcion:     {description}</p>
                        </Card.Text>
                        <div className="d-flex flex-column">
                            <div>
                                <div className="izquierda">
                                    <strong>{price}</strong>
                                </div>
                                <div className="derecha">
                                    <li class="derecha"><i class="fa fa-fw fa-cart-plus fa-lg" ></i></li>
                                </div>
                            </div>
                            <div className="observacion text-center my-2">
                                {observation} 
                            </div>
                            <div className="my-2">
                                <hr />
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>

                            
                            </div>
                        </div>
                    </Card.Body>
                </Card> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Producto;