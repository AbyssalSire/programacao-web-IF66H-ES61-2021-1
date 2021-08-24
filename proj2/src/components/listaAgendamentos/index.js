import React, { useState, useEffect } from 'react';
import './listaAgendamentos.css'

function ListaAgendamentos({predio, sala, dataAgendamento, horaAgendamentoInicio, horaAgendamentoFim, pessoaNome}) {
    return (
        <div className="col-md-3 col-sm-12 cartao text-center">
            <div className="texto-body">
                <h5>Sala: {sala}</h5>
                <p className="texto-text text-justify">
                    Prédio: {predio} <br />
                    Data agendada: {dataAgendamento} <br />
                    Inicio: {horaAgendamentoInicio} <br />
                    Fim: {horaAgendamentoFim} <br />
                    Agendado para {pessoaNome}<br />
                </p>

            </div>
        </div>

    )
}

export default ListaAgendamentos;