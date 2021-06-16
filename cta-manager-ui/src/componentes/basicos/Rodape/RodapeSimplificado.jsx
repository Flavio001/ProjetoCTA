/**
 *  05/05/21
 *  Componente RodapeSimplificado
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por exibir o conteúdo reduzido do Rodapé 
 * 
 * Desenvolvido por Flávio Antonio Dutra
 */

import React from 'react'
import '../Rodape/rodape.css'

const RodapeSimplificado = (props) =>{
    return(
        
    <footer className="container-flex text-center">       
        <div className="mt-3">
        <p>Desenvolvido pela Equipe Engenharia de Computação - UEMA<br/>São Luis/MA - 2021</p>
        </div>
    </footer>
    )
}
export default RodapeSimplificado