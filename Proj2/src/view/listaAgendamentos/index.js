import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import ListaAgendamentos from '../../components/listaAgendamentos';
import firebase from '../../config/firebase';

function ListaAgendamento() {
    const [agendamento, setAgendamento] = useState([]);

    var listaDeAgendamento = [];

    useEffect(() => {
        firebase.firestore().collection('agendamento').get().then(async (resultado)=>{
            await resultado.docs.forEach(doc=>{
                listaDeAgendamento.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setAgendamento(listaDeAgendamento);
        })
    });

    return (
        <body>
            <NavBar />
            <div className="col-12 p-3 my-3 bg-dark text-white">
                <div className="row">
                    <p>teste</p>
                    {
                        agendamento.map(item=><ListaAgendamentos predio={item.predio} sala={item.sala} dataAgendamento={item.dataAgendamento} horaAgendamentoInicio={item.horaAgendamentoInicio} horaAgendamentoFim={item.horaAgendamentoFim} pessoaNome={item.pessoaNome}/>)
                    }
                </div>
            </div>

        </body>
    );
}

export default ListaAgendamento;