import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';

function Home() {
    return (
        <body>

            <NavBar />
            <div className="container p-3 my-3 bg-dark text-white home-content" id="index-geral">
                <div className="container-titulo">
                    <h1 className="text-center">Agendamento de ambientes</h1>
                </div>
                <br />
                <br />
                <div className="home-content-div container-texto">
                    <p className="text-left">Informações sobre o agendamento de ambientes, como ambientes disponíveis e datas para
                        possíveis agendamentos.
                    </p>
                    <p className="text-right">Para fazer um agendamento, entre em contato um membro da equipe para que este possa te
                        registrar</p>
                </div>
                <div className="home-content-div container-texto">
                    <Link to="ambientes"><button className="btn btn-info container-btn mx-auto" id="todos">Ambientes</button></Link>

                    <Link to="pessoas_autorizadas"><button className="btn btn-info container-btn mx-auto" id="todos">Pessoas autorizadas</button></Link>
                </div>
                <br />
                <br />



            </div>
        </body>
    );

}
export default Home;