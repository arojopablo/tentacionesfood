import React, { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import '../styles/components/Pages/NosotrosPage.css';
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import About from "../components/layout/about";
import Card from 'react-bootstrap/Card';
import axios from 'axios';


{/* <div className="my-5">
<div className="container">
    <div className="row text-center">
        <div className="col-sm-10">
            <div class="heading_container heading_center psudo_white_primary mb_45">
                <h2>
                    Opiniones de nuestros clientes
                </h2>
            </div>
            <Carousel variant="dark">
                {loading ? (
                    <div class="spinner-border text-success item" role="status">
                        <span class="sr-only">Cargando...</span>
                    </div>
                ) : (
                    opinionWeb.map(item => <Carousel.Item>
                        <div className="box p-5 bg-secondary">
                            <div class="detail-box text-white">
                                <h6>
                                    Usurario Anonimo
                                </h6>
                                <p>
                                    Dice...
                                </p>

                                <p className="opinion">
                                    "{item.notificacion}"
                                </p>
                            </div>
                            <div class="img-box">
                                <img src="images/client2.jpg" alt="" class="box-img" />
                            </div>
                        </div>
                    </Carousel.Item>
                    )
                )}
            </Carousel>
        </div>
    </div>
</div>
</div> */}


const Nosotros = (props) => {

    const [loading, setLoading] = useState(false);
    const [opinionWeb, setOpiniones] = useState([]);

    useEffect(() => {
        const cargarOpinion = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/opiniones`);
            console.log("response tiene: ", response);
            setOpiniones(response.data);
            setLoading(false);
        }
        cargarOpinion();
    }, []);

    console.log(opinionWeb);

    const initialForm = {
        opinion: '',
    }


    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/opiniones`, formData);

        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }
    return (
        <div>
            {/* <OfertasFecha /> */}
            {/* <Linea /> */}
            <About />
            <Linea />
            <div>
                <form className="col-md-9 m-auto" method="post" action="/opiniones" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label for="inputname">Que opinas de nosotros?</label>
                            <input type="text" className="form-control mt-1" id="opinion" name="opinion" value={formData.opinion} onChange={handleChange} placeholder="Contanos que pensas de nosotros..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" class="btn btn-warning text-white btn-lg px-3">Cuentanos</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="my-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-10">
                            <div class="headpsudo_white_primarying_container heading_center  mb_45">
                                <h2>
                                    Opiniones de nuestros clientes
                                </h2>
                            </div>

                            <Carousel>
                                {loading ? (
                                    <div class="spinner-border text-success item" role="status">
                                        <span class="sr-only">Cargando...</span>
                                    </div>
                                ) : (
                                    opinionWeb.map(item => <Carousel.Item>
                                        <div className="box p-5 bg-dark rounded">
                                            <div className="detail-box text-white">
                                                <h6>
                                                    Usurario Anonimo
                                                </h6>
                                                <p>
                                                    Dice...
                                                </p>

                                                {/* <h4>Usuario Anonimo dijo:</h4> */}
                                                <p className="opinion">
                                                    "{item.notificacion}"
                                                </p>
                                            </div>
                                            <div className="imgnormalizada">
                                                <img src="images/client1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <Linea />
        </div>
    )
}

export default Nosotros;