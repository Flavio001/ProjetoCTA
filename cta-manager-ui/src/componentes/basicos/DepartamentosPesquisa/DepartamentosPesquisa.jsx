/**
 *  05/05/21
 *  Componente DepartamentosPesquisa
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  É exibido um icone e um nome genérico representando o  usuário logado;
 *  Também exibe uma barra de pesquisa dentro de cada um dos departamentos
 * 
 *  Foi construido aqui uma barra de pesquisa semelhante a documentação observada no bootstrap(4.6)
 *  https://getbootstrap.com/docs/4.6/components/forms/ - para os inputs
 *  https://getbootstrap.com/docs/4.6/components/buttons/ - para os botoes
 * 
 * Desenvolvido por Flávio Antonio Dutra
 * 
 */


import React from "react";

const PesquisaDepartamentos = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
        <div className="col-1 mt-4 text-center">
            <h3 className="caixa-usuario">
            <i className="bi bi-person-circle "><p>Usuário</p></i>
            </h3>
          </div>
          <div className="col-10 mt-5">
          <input
            type="Search"
            placeholder="Pesquisar nessa área..."
            className="form-control"/>
          </div>
          <div className="input-group-btn mt-5">
            <button className="btn btn-info">
              <span className="bi bi-search"/>
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default PesquisaDepartamentos;
