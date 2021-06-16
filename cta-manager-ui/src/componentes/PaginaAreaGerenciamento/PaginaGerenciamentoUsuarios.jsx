/**
 *  05/05/21
 *  Este componente é responsável pela Area de Gerenciamento de Usuários
 *  Contendo as funções principais:
 *   - GESTÃO DE USUÁRIOS
 *   - HISTÓRICO DE VERIFICAÇÕES
 *   - ADICIONAR NOVO USUÁRIO
 * 
 *  Foram importados os componentes:
 *  -  TemplateDepartamentos (responsável pela interface básica de cada um dos departamentos) 
 *  -  BotaoDepartamentos (responsável por redirecionar cada botao a sua funcionalidade)
 * 
 * Desenvolvido por Flávio Antonio Dutra
 */

import React from 'react'
import '../PaginaAreaGerenciamento/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaGerenciamentoUsuario = (props) => {
    return (
        <>
        <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-journal-arrow-up" 
            titulo="Gestão de Usuários"
            descricao ="Realize nessa seção a verificação de usuários, histórico de visitações e adição de novos usuários">

        <BotaoDepartamento 
            caminho=""
            estilo=" btn btn-info btn-lg  "
            titulo="USUÁRIOS" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="HISTÓRICO DE VERIFICAÇÕES" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="ADICIONAR NOVO USUÁRIO" /> 
      

        </TemplateDepartamentos>
        </div>
        
        </>
    )
}
export default PaginaGerenciamentoUsuario