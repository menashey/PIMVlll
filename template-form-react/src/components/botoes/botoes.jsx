import React from "react";
import "./botoes.css";

function botoes () {
    return ( 
        <div className="container-btn">
            <div className="container-savebtn">
             <button class=" btnsave btn">
            Salvar 
           </button>
            </div>
            <div>
               <button className="btncancel btn" >
             Cancelar
                </button>
            </div>
        
        </div>
     
        
    );
}
export default botoes;
