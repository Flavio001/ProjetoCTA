import React, { Component } from "react";
import CardOrdemMissao from "../basicos/CardOrdemMissao/CardOrdemMissao";
import MiniCardOrdemMissao from "../basicos/MiniCardOrdemMissao/MiniCardOrdemMissao";
import BarraNavegacaoPrincipal from "../basicos/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Rodape from "../basicos/Rodape/RodapeSimplificado";
import FormGroup from "../basicos/FormGroup/FormGroup";
import Botao from "../basicos/Botao/Botao"

import axios from 'axios'

class OrdemMissao extends Component {
  state = {
    nomeMissao: "",
    inicioMissao: "",
    terminoMissao: "",
    horarioApresentacao:"",
    solicitante:"",
    local:"",
    aeronaves:"",
    tripulacao:"",
    missao:"",
    depOperacoes:"",
    depAdministracao:"",
    depManutencao:"",
    depSeguranca:"",
    responsávelTecnico:"",
  };
  /*

  finalizar = () => {
    console.log(this.state);
    alert("Dados recebidos com sucesso");
  };
  */

  finalizar = () => {
    axios.post('http://localhost:8080/ordemMissao',{
        nomeOrdem: this.state.nomeMissao,
        inicioMissao: this.state.inicioMissao,
        terminoMissao: this.state.terminoMissao,
        descricaoMissao: this.state.missao,
        descricaoOperacoes:this.state.depOperacoes,
        descricaoAdm:this.state.depAdministracao,
        descricaoManutencao:this.state.depManutencao,
        descricaoSeguranca:this.state.depSeguranca,
        descricaoResponsávelTec:this.state.responsávelTecnico,
    }).then(response => {
        console.log(response)
    }).catch(erro => {
        console.log(erro.response)
    })

  };

  render() {
    return (
      <div>
        <BarraNavegacaoPrincipal />

        <form className="form-group ">
          <section>
            <div className="container">
              <div className="row">

              <div className="col-12 text-center mt-5">
                <h1>Ordem de Missão</h1>
                <p className="lead">Faça o preenchimento abaixo das informações:</p>
              </div>

                <FormGroup
                  col="col-12 form-group"
                  label="Nome da Missão: "
                  htmlFor="inputNomeMissao"
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Digite o nome da missao"
                    name="nomeMissao"
                    value={this.state.nomeMissao}
                    onChange={(e) => this.setState({ nomeMissao: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 col-lg-4 form-group"
                  label="Inicio da Missão: "
                  htmlFor="inputInicioMissao"
                >
                  <input
                    className="form-control"
                    type="date"
                    placeholder="data de criação"
                    name="inicioMissao"
                    value={this.state.inicioMissao}
                    onChange={(e) => this.setState({ inicioMissao: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 col-lg-4 form-group"
                  label="Término da Missão: "
                  htmlFor="inputTerminoMissao"
                >
                  <input
                    className="form-control"
                    type="date"
                    placeholder="data de criação"
                    name="dataCriacao"
                    value={this.state.terminoMissao}
                    onChange={(e) => this.setState({ terminoMissao: e.target.value })}
                  ></input>
                </FormGroup>

                <FormGroup
                  col="col-12 col-lg-4 form-group"
                  label="Horário da Apresentação: "
                  htmlFor="inputHorarioApresentacao"
                >
                  <input
                    className="form-control"
                    type="time"
                    name="horarioApresentacao"
                    value={this.state.horarioApresentacao}
                    onChange={(e) => this.setState({ horarioApresentacao: e.target.value })}
                  ></input>
                </FormGroup>

                <span className="col-12">
                  <MiniCardOrdemMissao 
                  cabeçalho="Solicitante" 
                  name="solicitante"
                  value={this.state.solicitante}
                  onChange={(e) => this.setState({ solicitante: e.target.value })}/>
                </span>

                <span className="col-12">
                  <MiniCardOrdemMissao 
                  cabeçalho="Local" 
                  name="local"
                  value={this.state.local}
                  onChange={(e) => this.setState({ local: e.target.value })}/>
                </span>
                <span className="col-12">
                  <MiniCardOrdemMissao 
                  cabeçalho="Aeronaves" 
                  name="aeronaves"
                  value={this.state.aeronaves}
                  onChange={(e) => this.setState({ aeronaves: e.target.value })}
                  />
                </span>

                <div className="col-12">
                  <CardOrdemMissao 
                    cabeçalho="Tripulação" 
                    name="tripulacao"
                    value={this.state.tripulacao}
                    onChange={(e) => this.setState({ tripulacao: e.target.value })}/>
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                    cabeçalho="Missão" 
                    name="missao"
                    value={this.state.missao}
                    onChange={(e) => this.setState({ missao: e.target.value })}/>
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                  cabeçalho="Departamento de Operações"
                  name="depOperacoes"
                  value={this.state.depOperacoes}
                  onChange={(e) => this.setState({ depOperacoes: e.target.value })} />
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                  cabeçalho="Departamento de Administração" 
                  name="depAdministracao"
                  value={this.state.depAdministracao}
                  onChange={(e) => this.setState({ depAdministracao: e.target.value })}/>
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                  cabeçalho="Departamento de Manutenção"
                  name="depManutencao"
                  value={this.state.depManutencao}
                  onChange={(e) => this.setState({ depManutencao: e.target.value })} />
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                  cabeçalho="Departamento de Segurança Operacional" 
                  name="depSeguranca"
                  value={this.state.depSeguranca}
                  onChange={(e) => this.setState({ depSeguranca: e.target.value })}/>
                </div>

                <div className="col-12">
                  <CardOrdemMissao 
                  cabeçalho="Responsável Técnico"
                  name="responsávelTecnico"
                  value={this.state.responsávelTecnico}
                  onChange={(e) => this.setState({ responsávelTecnico: e.target.value })} />
                </div>



       
                
              </div>
           
            </div>
          

                
            <div className="d-flex justify-content-center">
                <Botao
                  caminho="/departamentos"
                  estilo="btn btn-danger p-2 mr-5 "
                  id="sair"
                  titulo="VOLTAR"
                />

                <Botao
                  onClick={this.finalizar}
                  estilo="btn btn-success p-2"
                  id="entrar"
                  titulo="ENVIAR"
                />
              </div>

          </section>
        </form>

       


        <Rodape />
      </div>
    );
  }
}
export default OrdemMissao;
