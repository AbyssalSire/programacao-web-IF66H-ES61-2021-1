import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './cadastro_autorizado.css';
import NavBar from '../../components/navbar';

function Cadastro_autorizado() {
    const [msgTipo, setMsgTipo] = useState();

    const [nome, setNome] = useState();
    const [funcao, setFuncao] = useState();
    const [dadosExtras, setDadosExtras] = useState();
    const [telefone, setTelefone] = useState();
    const [emailCadastrado, setEmailCadastrado] = useState();
    const [avatar, setAvatar] = useState();
    const [carregando, setCarregando] = useState(0);

    const storage = firebase.storage();
    const db = firebase.firestore();


    function cadastrar() {
        setCarregando(1)
        storage.ref(`imagens/${avatar.name}`).put(avatar).then(() => {
            db.collection('usuariosCadastrados').add({
                nome: nome,
                funcao: funcao,
                dadosExtras: dadosExtras,
                telefone: telefone,
                emailCadastrado: emailCadastrado,
                avatar: avatar.name,
                dataCadastrado: new Date(),
            }).then(() => {
                setMsgTipo('ok')
                setCarregando(0)
            }).catch(() => {
                setMsgTipo('erro')
                setCarregando(0)
            })
        });
    }

    return (
        <body>
            <NavBar />
            <div className="container p-3 my-3 bg-dark text-white mx-auto text-center cadastro-content">

                <h1>Cadastro de novo usuário autorizado </h1>

                <form action="../paginas/index.html">
                    <div className="form-group">
                        <label for="enunciado">Nome:</label><br />
                        <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control mx-auto" id="pessoa-resp" name="pessoa-rest" /><br />
                    </div>
                    <div className="form-group">
                        <label for="enunciado">Função da pessoa: </label>
                        <select onChange={(e) => setFuncao(e.target.value)} name="func-pessoa" className="form-control mx-auto" id="func-pessoa">
                            <option disabled selected value>-- Selecione a função da pessoa --</option>
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                            <option value="servidor">Servidor</option>
                            <option value="pessoa-de-fora">Pessoa de fora da UTF</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="enunciado">Dados extras:</label><br />
                        <textarea onChange={(e) => setDadosExtras(e.target.value)} onChange={(e) => setDadosExtras(e.target.value)} name="dadosExtras" id="dadosExtras" cols="50" rows="5"></textarea><br /><br />
                    </div>
                    <div className="form-group">
                        <label for="enunciado">Telefone:</label><br />
                        <input onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control mx-auto" id="pessoa-fone" name="pessoa-fone" /><br />
                    </div>
                    <div className="form-group">
                        <label for="enunciado">E-mail:</label><br />
                        <input onChange={(e) => setEmailCadastrado(e.target.value)} type="text" className="form-control mx-auto" id="pessoa-email" name="pessoa-email" /><br />
                    </div>
                    <div className="form-group">
                        <label >Upload do avatar</label>
                        <input onChange={(e) => setAvatar(e.target.files[0])} type="file" className="form-control mx-auto" />
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
                                    onClick={cadastrar}>Cadastro</button>
                        }
                    </div>

                </form>
                {msgTipo === 'ok' && <span>Cadastrado com sucesso!</span>}
                {msgTipo === 'erro' && <span>Erro ao cadastrar</span>}
            </div>
        </body>
    );
}


export default Cadastro_autorizado;