import React from 'react'
import '../PaginaAreaOperacoes/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaAreaOperacoes = (props) => {
    return (
        <>
        <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi bi-bullseye"            
            titulo="Operações"
            descricao ="Área destinada ao departamento de Operações. Faça a emissão e envio de ordens de missão, controle de horas de horas de voo e controle do itinerário de veículos terrestres.">

        <BotaoDepartamento 
            caminho="/area_ordem_missao"
            estilo="btn btn-info btn-lg "
            titulo="GERAR ORDEM DE MISSÃO" />

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="ENVIAR ORDEM DE MISSÃO" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo="CONTROLE DE HORAS" /> 

        <BotaoDepartamento 
            caminho=""
            estilo="btn btn-info btn-lg "
            titulo=" CONTROLE DE VEÍCULOS " /> 
      
      
        </TemplateDepartamentos>
        </div>


            
        </>
    )
}
export default PaginaAreaOperacoes