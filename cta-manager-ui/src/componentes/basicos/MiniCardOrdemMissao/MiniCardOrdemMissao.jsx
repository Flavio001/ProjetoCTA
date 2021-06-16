/**
 *  05/05/21
 *  Componentes e estilizações construidos por Igor Pinheiro
 * 
 */

import React, { Component } from "react";
import "./MiniCardOrdemMissao.css";

class MiniCardOrdemMissao extends Component {
 
  render() {
    return (
      <section className="d-flex justify-content-center mb-4">
        <div className="card bg-light CardConteinerMini">
          <div className="card-header">
            <h5>{this.props.cabeçalho}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              <input
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
                className="form-control"
                style={{ resize: "none" }}
                placeholder={"Digite " + this.props.cabeçalho}
              />
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default MiniCardOrdemMissao;
