import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './agendamento.css';
import NavBar from '../../components/navbar';

function Agendamento() {
    const [msgTipo, setMsgTipo] = useState();
    const [predio, setPredio] = useState();
    const [sala, setSala] = useState();
    const [dadosExtras, setDadosExtras] = useState();
    const [funcPessoa, setFuncPessoa] = useState();
    const [pessoaNome, setPessoaNome] = useState();
    const [dataAgendamento, setData] = useState();
    const [horaAgendamentoInicio, setHoraInicio] = useState();
    const [horaAgendamentoFim, setHoraFim] = useState();
    const db = firebase.firestore();

    const [carregando, setCarregando] = useState(0);
    const email = useSelector(state => state.usuarioEmail);

    function cadastrar() {
        setCarregando(1);
        db.collection('agendamento').add({
            predio: predio,
            sala: sala,
            dadosExtras: dadosExtras,
            funcPessoa: funcPessoa,
            pessoaNome: pessoaNome,
            dataAgendamento: dataAgendamento,
            horaAgendamentoInicio: horaAgendamentoInicio,
            horaAgendamentoFim: horaAgendamentoFim,
            responsavelPeloAgendamento: email,
            dataCriado: new Date(),
        }).then(() => {
            setMsgTipo('ok');
            setCarregando(0);
        }).catch(() => {
            setMsgTipo('erro');
            setCarregando(0);
        });
    }

    return (
        
        <body>
            <NavBar />
            <div className="container p-3 my-3 bg-dark text-white agendamento-content">
                <form action="">
                    <div className="form-group mx-auto text-center">
                        <h1>Agendamento de Salas</h1>
                        <div className="form-group">
                            <label for="enunciado">Lista de blocos da UTF:</label>
                            <select onChange={(e) => setPredio(e.target.value)} name="predio" id="predio" className="form-control mx-auto ">
                                <option disabled selected value>-- Selecione um bloco da UTF --</option>
                                <option value="areas-administracao">Áreas administraticas</option>
                                <option value="bloco-a">Bloco A</option>
                                <option value="bloco-ghi">Bloco GHI</option>
                                <option value="bloco-k">Bloco K</option>
                                <option value="bloco-s">Bloco S</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="enunciado">Lista de salas disponíveis</label>
                            <select onChange={(e) => setSala(e.target.value)} name="sala" id="sala" className="form-control mx-auto ">
                                <option disabled selected value>-- Selecione o número da sala --</option>
                                <option value="015">Sala 015</option>
                                <option value="105">Sala 105</option>
                                <option value="205">Sala 205</option>
                                <option value="323">Sala 323</option>
                                <option value="anfiteatro">Sala Anfiteatro</option>
                                <option value="reunioes">Sala reuniões</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="enunciado">Dados extras do ambiente em questão:</label><br />
                            <textarea onChange={(e) => setDadosExtras(e.target.value)} name="dadosExtras" id="dadosExtras" cols="50" rows="5"></textarea><br /><br />
                        </div>
                        <div className="form-group">
                            <label for="enunciado">Função da pessoa requisitando agendamento: </label>
                            <select onChange={(e) => setFuncPessoa(e.target.value)} name="funcPessoa" id="funcPessoa" className="form-control mx-auto ">
                                <option disabled selected value>-- Selecione a função da pessoa --</option>
                                <option value="aluno">Aluno</option>
                                <option value="professor">Professor</option>
                                <option value="servidor">Servidor</option>
                                <option value="pessoa-de-fora">Pessoa de fora da UTF</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="enunciado">Pessoa requisitando agendamento: </label>
                            <input onChange={(e) => setPessoaNome(e.target.value)} type="text" className="form-control mx-auto" id="pessoa-resp" name="pessoa-rest" /><br />
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label for="enunciado">Selecione a data para o agendamento: </label>
                                <br />
                                <br />
                                <input onChange={(e) => setData(e.target.value)} type="date" min="2021-08-23" className="form-control mx-auto" />
                                <br />
                                {/**
                            <button type="button" className="btn btn-success" id="adicionar-mais-dias"
                            onclick="javascript:alert('Função com problemas, será implementada na segunda etapa, por favor ler o comentário no arquivo scrit.js')">Adicionar
                            mais dias</button>
                        */}
                            </div>

                            <div className="col-6">
                                <label for="enunciado">Selecione o horário do inicio do Agendamento: </label>
                                <br />
                                <br />
                                <input onChange={(e) => setHoraInicio(e.target.value)} type="time" className="form-control mx-auto " />
                                <br />
                                <label for="enunciado">Selecione o horário do inicio do Agendamento: </label>
                                <br />
                                <br />
                                <input onChange={(e) => setHoraFim(e.target.value)} type="time" className="form-control mx-auto " />
                                <br />
                                {/**
                            <button type="button" className="btn btn-success" id="adicionar-mais-dias"
                            onclick="javascript:alert('Função com problemas, será implementada na segunda etapa, por favor ler o comentário no arquivo scrit.js')">Adicionar
                            mais dias</button>
                        */}
                            </div>
                            <br />
                        </div>
                        <div className="row">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
                                    onClick={cadastrar}>Cadastro</button>
                        }
                        </div>

                    </div>
                </form>

                {msgTipo === 'ok' && <span>Agendado com sucesso!</span>}
                {msgTipo === 'erro' && <span>Erro ao agendar</span>}

            </div>
        </body>
    );
}

export default Agendamento;