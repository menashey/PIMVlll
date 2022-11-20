import React from "react";
import Botoes from "../botoes";
import "./formulario.css";

function formulario () {
    return ( 
        <form className="campo">
    <div className="inputarea">
        <label for="nome" className="textinput">Nome:</label>
        <input type="text" id="nome" className="inputfieldname" />
    </div>
    <div className="inputarea">
        <label for="cpf" className="textinput">CPF:</label>
        <input type="number" id="cpf" className="inputfieldcpf"/>
    </div> 
    <div className="inputarea">
        <label for="endereco" className="textinput">Endereço:</label>
        <input type="text" id="endereco"className="inputfieldadress" />
    </div>
    <div className="inputarea">
        <label for="estado" className="textinput">Estado:</label>
        <input type="text" id="estado" className="inputfieldstate"/>
    </div>
    <div className="inputarea">
        <label for="bairro" className="textinput">Bairro:</label>
        <input type="text" id="bairro" className="inputfielddistrict"/>
    </div>
    <div className="inputarea">
        <label for="cep" className="textinput">CEP:</label>
        <input type="number" id="cep" className="inputfieldzipcode"/>
    </div>
    <div className="inputarea">
        <label for="telefone" className="textinput">Telefone:</label>
        <input type="number" id="numero" className="inputfieldnumber"/>
    </div>
    <Botoes></Botoes>
</form>

        
    );
}
export default formulario;
