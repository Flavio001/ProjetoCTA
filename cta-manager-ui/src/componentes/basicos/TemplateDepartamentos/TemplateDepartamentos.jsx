/**
 *  05/05/21
 *  Componente TemplateDepartamentos
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por criar um template que pode ser usado nos componentes de cada departamentos
 * 
 *  Aqui são importados:
 * 
 *  O componente BarraNavegacaoPrincipal (mais detalhes ver descrição do componente BarraNavegacaoPrincipal)
 *  O componente DepartamentosPesquisa (mais detalhes ver descrição do componente DepartamentosPesquisa)
 *  O componente Botão (mais detalhes ver descrição do componente Botao)
 * 
 *  Desenvolvido por Flávio Antonio Dutra
 * 
 */


import React from "react";
import BarraNavegacaoPrincipal from "../BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import DepartamentosPesquisa from "../DepartamentosPesquisa/DepartamentosPesquisa";
import Botao from "../Botao/Botao";
import Rodape from "../Rodape/RodapeSimplificado";
import "./TemplateDepartamentos.css";

const TemplateDepartamentos = (props) => {
  return (
    <>
      <BarraNavegacaoPrincipal />

      <section>
        <DepartamentosPesquisa />

        <div className="row ">
          <div className="caixa-gerenciamento col-12 text-center">
            <Botao
              estilo={"btn btn-outline-info botao-icone"}
              titulo={<i className={props.icone}></i>}
            />

            <h1>{props.titulo}</h1>
            <p className="lead">{props.descricao} </p>
          </div>
        </div>

        {props.children}

        <Botao
          caminho="/departamentos"
          estilo="btn btn-danger col-12 mt-4 mb-4"
          id="botaoSair"
          titulo="SAIR"
        />

        <Rodape />
      </section>
    </>
  );
};
export default TemplateDepartamentos;
