import React, { useState } from 'react';
import 'firebase/auth';
import NavBar from '../../components/navbar';
import firebase from '../../config/firebase';
import './login.css';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();
    const [carregando, setCarregando] = useState(0);


    function autenticar() {
        setCarregando(1);
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('ok');
            setCarregando(0);
            setTimeout(() => {
                dispatch({ type: "LOGIN", usuarioEmail: email })
            }, 10);

        }).catch(erro => {
            setMsgTipo('erro');
        })
    }



    return (
        <body>
            <NavBar />
            <form className="form-signin mx-auto text-center" action="../paginas/index.html">
                <div className="login-content container p-3 my-3 bg-dark text-white">
                    {
                        useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/'></Redirect> : null
                    }
                    <h1 className="d-flex justify-content-center  mb-3">Login</h1>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-xs-4  mb-3">
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mx-auto" placeholder="Email institucional" id="inputEmail" />
                        </div>
                    </div>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-xs-4 mb-3">
                            <label>Password</label>
                            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control mx-auto" placeholder="Coloque sua senha" id="inputPassword" />
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button className="btn btn-login" type="button"
                                    onClick={autenticar}>Entrar</button>
                        }
                    </div>
                    {msgTipo === 'erro' && <span>Erro ao logar</span>}
                </div>
            </form>
        </body>
    );
}

export default Login;