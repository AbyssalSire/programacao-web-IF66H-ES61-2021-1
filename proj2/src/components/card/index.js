import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './card.css'
import firebase from '../../config/firebase';

function Card({key, nome, funcao, emailCadastrado, telefone, avatar, dadosExtras}) {

    const[urlImagem, setUrlImagem] = useState();

    useEffect(()=>{
        firebase.storage().ref(`imagens/${avatar}`).getDownloadURL().then(url=>{
            setUrlImagem(url);
        })
    });

    return (
        <div className="col-md-3 col-sm-12 cartao">
            <img src={urlImagem} id="imgCard" alt="" className="card-img-top img-cartao" />

            <div className="card-body">
                <h5>{nome}</h5>
                <h5>Função: {funcao}</h5>
                <p className="card-text text-justify">
                E-mail para contato: {emailCadastrado} <br /> 
                Telefone para contato: {telefone} <br /> 
                Dados extras: {dadosExtras}
                </p>

                <div className="row rodape-card d-flex align-items-center">
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

export default Card;