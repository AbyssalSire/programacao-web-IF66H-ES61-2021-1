import React, { useState, useEffect } from 'react';
import './pessoas_autorizadas.css';
import NavBar from '../../components/navbar';
import Card from '../../components/card';
import Bloco_texto from '../../components/bloco_texto';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import { result } from 'lodash';

function PessoasAutorizadas() {
    const [cards, setCards] = useState([]);

    var listaCards = [];

    useEffect(()=>{
        firebase.firestore().collection('usuariosCadastrados').get().then(async (resultado)=>{
            await resultado.docs.forEach(doc=>{
                listaCards.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setCards(listaCards);
        })
    });


    return (
        <body>
            <NavBar />
            <div className="col-12 p-3 my-3 bg-dark text-white">
                <div className="row">
                    {
                        cards.map(item=><Card key={item.id} nome={item.nome} funcao={item.funcao} emailCadastrado={item.emailCadastrado} telefone={item.telefone} dadosExtras={item.dadosExtras} avatar={item.avatar} />)
                    }
                </div>
            </div>

        </body>
    );
}

export default PessoasAutorizadas;