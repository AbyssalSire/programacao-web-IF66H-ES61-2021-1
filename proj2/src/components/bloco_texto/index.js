import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './bloco_texto.css'

function Bloco_texto({key, predio, sala}) {
    return (
        <div className="col-md-3 col-sm-12 cartao text-center">
            <div className="texto-body">
                <h5>Sala: {sala}</h5>
                <p className="texto-text text-justify">Prédio: {predio}</p>

                <div className="row rodape-texto d-flex align-items-center">
                    <div className="col-6">
                        {
                            useSelector(state => state.usuarioLogado) > 0 ?
                                <Link to="agendamento" className="btn btn-sm btn-detalhes">Fazer agendamento</Link>
                                :
                                <Link to="login" className="btn btn-sm btn-detalhes">Login</Link>
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Bloco_texto;