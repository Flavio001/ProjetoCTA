import React, { Component } from 'react'
import TemplateBasicoAreas from '../../basicos/TemplateBasicoAreas/TemplateBasicoAreas'
import FormGroup from '../../basicos/FormGroup/FormGroup'
import Botao from '../../basicos/Botao/Botao'

class PrazosDocumentacoes extends Component{
    render(){
        return(
            <>
            <TemplateBasicoAreas>
                <div className="container text-center ">
                    <div className="row d-flex justify-content-center">
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 col-3 m-1" >
                        <div class="card-header">HABILITAÇÃO VOO</div>
                            <div class="card-body">
                                <h5 class="card-title">RENOVAÇÃO ATÉ O DIA 05/05/21</h5>
                                <p class="card-text">Para documentações registradas anteriores a abril de 2018.</p>
                            </div>
                    </div>
                
                
                
                
             
                    </div>
              

                </div>

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
export default PrazosDocumentacoes