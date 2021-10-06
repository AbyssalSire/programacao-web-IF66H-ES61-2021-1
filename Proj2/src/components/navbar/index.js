import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css'

function NavBar() {
    const dispatch = useDispatch();
    function contato(){
        alert('Para entrar em contato com o criador: lucmalheiros@gmail.com');
    };
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="nav-link active">Página inicial</ Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                useSelector(state => state.usuarioLogado) > 0 ?
                                    <>
                                        <li className="nav-item">
                                            <Link to="agendamento" className="nav-link active">Fazer agendamento</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="cadastro_autorizado" className="nav-link active">Cadastrar nova pessoa autorizada</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="cadastro_ambientes" className="nav-link active">Cadastrar novo ambiente</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="listaAgendamento" className="nav-link active">Lista de Agendamentos</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={() => dispatch({ type: "LOGOUT" })} className="nav-link active">Sair</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link onClick={contato} id="contato" className="nav-link active">Contato</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="login" className="nav-link active">Login</Link>
                                        </li>
                                    </>

                            }
                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar;