import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './cadastro_ambientes.css';
import NavBar from '../../components/navbar';

function Cadastro_ambientes() {
    const [msgTipo, setMsgTipo] = useState();
    const [predio, setPredio] = useState();
    const [sala, setSala] = useState();
    const [responsavel, setResponsavel] = useState();
    const db = firebase.firestore();
    const email = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(0);

    function cadastrar() {
        setCarregando(1);
        db.collection('predios').add({
            predio: predio,
            sala: sala,
            responsavelPeloPredio: responsavel,
            responsavelPeloAgendamento: email,
            dataCadastrado: new Date(),
        }).then(() => {
            setMsgTipo('ok');
            setCarregando(0)
        }).catch(() => {
            setMsgTipo('erro');
            setCarregando(0);
        });
    }


    return (
        <body>
            <NavBar />
            <div className="container p-3 my-3 bg-dark text-white cadastro-content">
                <div className="row">
                    <h1 className="mx-auto text-center">Cadastro novo ambiente</h1>
                </div>

                <form action="../paginas/index.html">
                    <div className="form-group mx-auto text-center">
                        <label for="enunciado">Prédio da UTF:</label>
                        <select onChange={(e) => setPredio(e.target.value)} name="predios" id="predios" className="form-control mx-auto">
                            <option disabled selected value>-- Selecione uma categoria --</option>
                            <option value="areas-administracao">Áreas administraticas</option>
                            <option value="bloco-a">Bloco A</option>
                            <option value="bloco-ghi">Bloco GHI</option>
                            <option value="bloco-k">Bloco K</option>
                            <option value="bloco-s">Bloco S</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group  mx-auto text-center">
                        <label for="enunciado">Numero da Sala</label>
                        <input onChange={(e) => setSala(e.target.value)} type="text" id="sala-numero" name="sala-numero" className="form-control  mx-auto" />
                    </div>
                    <br />
                    <div className="form-group  mx-auto text-center">
                        <label for="enunciado">Responsável pelo prédio</label>
                        <input onChange={(e) => setResponsavel(e.target.value)} type="text" id="responsavel" name="responsavel" className="form-control  mx-auto" />
                    </div>
                    <br />
                    <div className="form-group  mx-auto text-center">



                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
                                    onClick={cadastrar}>Cadastro</button>
                        }

                    </div>
                </form>
                {msgTipo === 'ok' && <span>Sucesso ao cadastrar</span>  }
                {msgTipo === 'erro' && <span>Erro ao cadastrar</span>  }
            </div>
        </body>
    );
}

export default Cadastro_ambientes;