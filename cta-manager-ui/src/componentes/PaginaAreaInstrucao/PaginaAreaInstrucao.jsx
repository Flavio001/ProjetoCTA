import React from 'react'
import '../PaginaAreaInstrucao/paginaDepartamentos.css'
import BotaoDepartamento from '../basicos/Botao/BotaoDepartamentos'
import TemplateDepartamentos from '../basicos/TemplateDepartamentos/TemplateDepartamentos'


const PaginaAreaInstrucao = (props) => {
    return (
        <>
         <div className=" container-flex ">
        <TemplateDepartamentos
            icone="display-4 bi bi-book" 
            titulo="Instrução"
            descricao ="Verifique os cursos mais atualizados para você.">

        <BotaoDepartamento 
            caminho="/prazos_documentacoes"
            estilo=" btn btn-info btn-lg  "
            titulo="PRAZOS DE DOCUMENTAÇÕES" />

        <BotaoDepartamento 
            caminho="/cursos_disponiveis"
            estilo="btn btn-info btn-lg "
            titulo="CURSOS DISPONÍVEIS" />

        <BotaoDepartamento
            caminho="/renovacao"
            estilo="btn btn-info btn-lg "
            titulo="RENOVAÇÃO" /> 

        <BotaoDepartamento 
            caminho="/editais"
            estilo="btn btn-info btn-lg "
            titulo="EDITAIS" /> 
      
        </TemplateDepartamentos>
        </div>
        
           
        </>
    )
}
export default PaginaAreaInstrucao