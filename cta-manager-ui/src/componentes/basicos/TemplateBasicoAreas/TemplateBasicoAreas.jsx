/**
 *  05/05/21
 *  Componente TemplateBasicoAreas
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por criar um template que é ser usado dentro das funcionalidades de cada departamento
 * 
 * 
 *  Desenvolvido por Flávio Antonio Dutra
 *  Mais detalhes abaixo:
 * 
 */


import React from "react";
import BarraNavegacaoPrincipal from "../BarraNavegacaoPrincipal/BarraNavegacaoPrincipal";
import Botao from "../Botao/Botao";
import Rodape from "../Rodape/RodapeSimplificado";

const TemplateBasicoAreas = (props) => {
  return (
    <>
      <BarraNavegacaoPrincipal />

      <section>
        <div className="container">
        <div className="row ">
          <div className="caixa-gerenciamento col-12 text-center">

            {/** OBS.:
             * O props.titulo, vai definir o titulo da funcionalidade
             * e o props.descricao irá definir a descrição do titulo
             */}

            <div className="col-12 mt-5">
                <h1>{props.titulo}</h1>
                <p className="lead">{props.descricao}</p>
            </div>
       
          </div>
        </div>
        </div>

        {props.children}

        <div className="d-flex justify-content-center ">
        
              </div>

        <Rodape />
      </section>
    </>
  );
};
export default TemplateBasicoAreas;
