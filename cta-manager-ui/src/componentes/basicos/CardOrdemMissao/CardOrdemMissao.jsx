/**
 *  05/05/21
 *  Componentes e estilizações construidos por Igor Pinheiro
 * 
 */


import React, { Component } from "react";

class CardOrdemMissao extends Component {

  render() {
    return (
      <section>
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h5>{this.props.cabeçalho}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              <textarea
                rows="7"
                className="AreaDescricao form-control"
                style={{ resize: "none" }}
                placeholder={"Descrição " + this.props.cabeçalho}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default CardOrdemMissao;
