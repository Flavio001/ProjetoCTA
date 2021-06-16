/**
 *  05/05/21
 *  Componente FormGroup
 * 
 *  Este é um componente básico (reutilizado varias vezes no projeto)
 * 
 *  Ele é responsável por atribuir os parametros de uma label em cada caixa de formulário usado no sistema
 * 
 *  Tem como propriedades:
 *  props.col = que indica o numero de colunas (sistema grid) que o elemento irá ocupar:
 *      para mais detalhes consultar: https://getbootstrap.com/docs/4.6/layout/grid/
 * 
 *  props.htmlFor = atruibui um elemento htmlFor
 *  props.icon = utiliza um icone de bootstrap icons, para estilizar o label:
 *      para mais detalhes consultar: https://icons.getbootstrap.com/

 *  props.label =  que recebe o titulo que for digitado no label

* Desenvolvido por Flávio Antonio Dutra


 */


import React from "react";

const FormGroup = (props) => {
  return (
    <>
      <div className={props.col}>
        <label className="lead" htmlFor={props.htmlFor}>
          <i className={props.icon}></i> <strong> {props.label} </strong>
        </label>
        {props.children}
       
      </div>
    </>
  );
};
export default FormGroup;
