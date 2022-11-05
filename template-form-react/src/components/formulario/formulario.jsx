import React from "react";
import "./formulario.css";

function formulario () {
    return ( 
        <form>
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" />
    </div>
    <div>
        <label for="cpf">CPF</label>
        <input type="number" id="cpf" />
    </div>
    <div>
        <label for="endereco">Endereço</label>
        <input type="text" id="endereco" />
    </div>
    <div>
        <label for="estado">Estado:</label>
        <input type="text" id="estado" />
    </div>
    <div>
        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" />
    </div>
    <div>
        <label for="cep">CEP:</label>
        <input type="number" id="cep" />
    </div>
    <div>
        <label for="telefone">Telefone:</label>
        <textarea type="number" id="numero"></textarea>
    </div>
</form>

        
    );
}
export default formulario;
