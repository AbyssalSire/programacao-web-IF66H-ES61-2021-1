import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './listaAgendamentos.css'

function listaDeAgendamentos({ key, predio, sala, dataAgendamento, horaAgendamentoInicio, horaAgendamentoFim, pessoaNome, funcPessoa, dadosExtras, responsavelPeloAgendamento, dataCriado }) {
    return (
        <div className="col-md-3 col-sm-12 cartao text-center">
            <div className="texto-body">
                <h5>Sala: {sala}</h5>
                <p className="texto-text text-justify">
                    Prédio: {predio} <br />
                    Data agendada: {dataAgendamento} <br />
                    Inicio: {horaAgendamentoInicio} <br />
                    Fim: {horaAgendamentoFim} <br />
                    Agendado para {pessoaNome} cuja função na UTF é de {funcPessoa} <br />
                    Dados extras: {dadosExtras}

                    Agendado por: {responsavelPeloAgendamento} em {dataCriado}
                </p>

            </div>
        </div>

    )
}

export default listaDeAgendamentos;