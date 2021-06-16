import React, { Component } from "react";
import TemplateBasicoAreas from "../../basicos/TemplateBasicoAreas/TemplateBasicoAreas";
import FormGroup from "../../basicos/FormGroup/FormGroup";
import LogoSipaer from "../../../img/Sipaer.png";
import Botao from "../../basicos/Botao/Botao"

class RelatoriosSeguranca extends Component {
  render() {
    return (
      <>
        <TemplateBasicoAreas titulo="Relatórios de Prevenção - RELPREV" descricao="Air Safety Report - ASR">

        <div className="container">
            <div className="row">

              <div className="col-2 text-center">
                <strong className="text-center">SIPAER</strong><br/>
                <img src={LogoSipaer} width="120" alt="logo-sipaer"/><br/>
                <strong className="text-center">CENIPA</strong>
              </div>

              <div className="col-10">
                <br/><br/>
                <p className=" lead text-justify">De acordo com as regulamentações brasileiras este relato (ou parte dele) somente será usado para a prevenção de acidentes aeronáuticos a fim de aumentar a segurança operacional. Este relato não precisa ser identificado se o for o relator será informado sobre as medidas adotadas.</p>
              </div> 

              <div className="col-12 text-center">
                <h3>Dados Gerais da Ocorrência(Ocurrance Information)</h3>
              </div>

            

              <FormGroup
                col="col-12 form-group"
                label="Digite o local (place): "
                htmlFor="inputLocal"
              >
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  placeholder="Ex.: Rua Antonio Rayol"
                  name="local"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

              <FormGroup
                col="col-6 form-group"
                label="Informe a data (place): "
                htmlFor="inputData"
              >
                <input
                  type="date"
                  className="form-control"
                  id="inputNome"
                  name="data"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

              
              <FormGroup
                col="col-6 form-group"
                label="Informe o horário (time): "
                htmlFor="inputData"
              >
                <input
                  type="time"
                  className="form-control"
                  id="inputNome"
                  name="data"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

              <FormGroup
                col="col-12 form-group text-center"
                label="Pessoal envolvido e/ou aeronave : "
                htmlFor="inputData"
              >
                <input
                  type="text"
                  className="form-control"
                  id="inputPessoal"
                  name="data"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

              <FormGroup
                col="col-12 form-group"
                label="Informe a situação ocorrida: "
                htmlFor="inputData"
              >
                <textarea
                  className="form-control"
                  rows="10"
                  id="inputNome"
                  name="data"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></textarea>
              </FormGroup>

              <FormGroup
                col="col-4 form-group "
                label="E-mail para contato: "
                htmlFor="inputData"
              >
                <input
                  type="email"
                  className="form-control"
                  id="inputPessoal"
                  placeholder="josesilva@email.com"
                  name="email"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

              
              <FormGroup
                col="col-4 form-group "
                label="Telefone para contato: "
                htmlFor="inputData"
              >
                <input
                  type="tel"
                  className="form-control"
                  id="inputTelefone"
                  placeholder="(XX) XXXXX-XXXX"
                  name="email"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>

                          
              <FormGroup
                col="col-4 form-group "
                label="Relator (Repórter): "
                htmlFor="inputData"
              >
                <input
                  type="text"
                  className="form-control"
                  id="inputRelator"
                  placeholder="José Silva"
                  name="relator"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                ></input>
              </FormGroup>
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
    );
  }
}
export default RelatoriosSeguranca;
