import React from 'react';
import './agenda.css';
import NavBar from '../../components/navbar';

function Agenda() {
    return (
        <body>
            <NavBar />
            <div className="container p-3 my-3 bg-dark text-white">
                <h1>Agenda do mês</h1>
                <h3>Clique no dia para ver as salas reservadas no dia em questão</h3>
                <table id="calendario" className="table table-dark">
                    <tr>
                        <thead className="thead-light">
                            <th>Domingo</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                            <th>Sábado</th>
                        </thead>
                    </tr>
                    <tr>
                        <th id="dia">-</th>
                        <th id="dia">-</th>
                        <th id="dia">-</th>
                        <th id="dia">-</th>
                        <th id="dia">1</th>
                        <th id="dia">2</th>
                        <th id="dia">3</th>
                    </tr>
                    <tr>
                        <th id="dia">4</th>
                        <th id="dia">5</th>
                        <th id="dia">6</th>
                        <th id="dia">7</th>
                        <th id="dia">8</th>
                        <th id="dia">9</th>
                        <th id="dia">10</th>
                    </tr>
                    <tr>
                        <th id="dia">11</th>
                        <th id="dia">12</th>
                        <th id="dia">13</th>
                        <th id="dia">14</th>
                        <th id="dia">15</th>
                        <th id="dia">16</th>
                        <th id="dia">17</th>
                    </tr>
                    <tr>
                        <th id="dia">18</th>
                        <th id="dia">19</th>
                        <th id="dia">20</th>
                        <th id="dia">21</th>
                        <th id="dia">22</th>
                        <th id="dia">23</th>
                        <th id="dia">24</th>
                    </tr>
                    <tr>
                        <th id="dia">25</th>
                        <th id="dia">26</th>
                        <th id="dia">27</th>
                        <th id="dia">28</th>
                        <th id="dia">29</th>
                        <th id="dia">30</th>
                        <th id="dia">31</th>
                    </tr>
                </table>
            </div>
        </body>
    );
}

export default Agenda;