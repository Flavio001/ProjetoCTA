/**
 *  05/05/21
 *  Este componente é responsável pela Area Administrativa
 *  Contendo as funções principais:
 *   - DOCUMENTAÇÕES
 *   - CONTRATOS DIVERSOS
 *   - CONTRACHEQUES
 * 
 *  Foram importados os componentes:
 *  -  TemplateDepartamentos (responsável pela interface básica de cada um dos departamentos) 
 *  -  BotaoDepartamentos (responsável por redirecionar cada botao a sua funcionalidade)
 * 
 * Desenvolvido por Flávio Antonio Dutra
 */

import React from 'react'
import './paginaDepartamentos.css'
import BotaoDepartamentos from '../basicos/Botao/BotaoDepartamentos'

import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaAreaAdmistrativa = (props) => {
    return (
        <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-lock" 
            titulo="Administrativo"
            descricao ="Área destinada ao departamento de administração. Faça a emissão de documentações, contratos e contracheques.">

        <BotaoDepartamentos      
            caminho=""
            estilo=" btn btn-info btn-lg  "
            titulo="DOCUMENTAÇÕES" />

        <BotaoDepartamentos 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTRATOS DIVERSOS" />

        <BotaoDepartamentos 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTRACHEQUES" /> 
      
        </TemplateDepartamentos>
        
        </div>
        
    )
}
export default PaginaAreaAdmistrativa