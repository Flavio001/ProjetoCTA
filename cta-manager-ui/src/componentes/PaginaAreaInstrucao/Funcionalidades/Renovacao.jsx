import React, { Component } from 'react'
import TemplateBasicoAreas from '../../basicos/TemplateBasicoAreas/TemplateBasicoAreas'
import FormGroup from '../../basicos/FormGroup/FormGroup'
import Botao from '../../basicos/Botao/Botao'

class Renovacao extends Component{
    render(){
        return(
            <>
            <TemplateBasicoAreas>
            <div className="row d-flex justify-content-center">
                <Botao
                  caminho="/area_instrucao"
                  id="sair"
                  estilo="btn btn-danger mt-4 mb-4 p-2 mr-5"
                  titulo="VOLTAR"
                />

                <Botao
                  caminho="/departamentos"
                  id="entrar"
                  estilo="btn btn-success mt-4 mb-4 p-2 "
                  titulo="ENVIAR"
                />
              </div>  
                
            </TemplateBasicoAreas>
            </>
        )
    }
}
export default Renovacao