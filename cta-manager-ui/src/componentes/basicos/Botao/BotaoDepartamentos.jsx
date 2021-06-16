/**
 *  05/05/21
 *  Componente BotaoDepartamentos
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por criar os botoes de funcionalidades de cada um dos departamentos
 *  Possui as propriedades:
 * 
 *  props.caminho = que redireciona o botao ao caminho(path) especifico (disponível em Routes.jsx)
 *  props.onCLick = que informa a função a ser atribuida a cada botão, quando este for clicado
 *  props.estilo =  que pode receber um estilo inerente ao bootstrap, ou de um arquivo de estilo(css) externo
 *  props.titulo = que indica o texto interno de cada botão
 * 
 * Desenvolvido por Flávio Antonio Dutra
 */

import React from 'react'
import {Link} from 'react-router-dom'
import '../Botao/botaoDepartamentos.css'

const BotaoDepartamentos = (props) => {
    return (

        <div className="d-flex justify-content-center ">
            <Link to={props.caminho}>
                <button type="submit" 
                id='botao-departamento'
                onClick={props.onClick}  
                className={props.estilo}>{props.titulo}</button>
                <div className="mb-3"/>
            </Link>
            
        </div>

    )

}
export default BotaoDepartamentos