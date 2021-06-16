import React, { Component } from 'react'
import TemplateBasicoAreas from '../../basicos/TemplateBasicoAreas/TemplateBasicoAreas'
import FormGroup from '../../basicos/FormGroup/FormGroup'
import Botao from '../../basicos/Botao/Botao'

class Avisos extends Component{
    render(){
        return(
            <>
            <TemplateBasicoAreas>
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        <h2>Avisos Gerais</h2>
                        <p className="lead">Para ver os avisos, informe a data e faça a pesquisa</p>
                    </div>

                    <FormGroup
                           label = 'Informe a data do aviso:'
                           htmlFor = "inputData"
                           icon = "bi bi-calendar"
                        ></FormGroup>

                         
                        <input 
                         type="date"
                         className="form-control col-11"
                        />
                        <button className="btn btn-info">
                            <span className="bi bi-search"/>
                        </button>
                        <br/>


                        <div className="col-12 text-center mt-5">
                            <div className="card" width = '18rem'>
                                    <div className=" lead card-header">
                                        Avisos
                                    </div>
                                <ul className="list-group list-group-flush">
                                <a href=""> <li className="list-group-item">Aviso 001 - Alteração de Normas<i class="float-right bi bi-eye"></i></li></a>
                                <a href=""><li className="list-group-item">Aviso 002 - Noticias <i class="float-right bi bi-eye"></i></li></a>
                                <a href=""><li className="list-group-item">Aviso 003 - Escala de serviço<i class="float-right bi bi-eye"></i></li></a>
                                </ul>
                            </div>
                        </div>

                        <Botao
                        caminho=""
                        id=""
                        estilo="btn btn-warning mt-5"
                        titulo='Novo Aviso'/>
                        

                          
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
            <Botao
                  caminho="/area_publica"
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
export default Avisos