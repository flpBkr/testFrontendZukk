import React from 'react';

import './Pages.css';

export default function ListItems(){
    return (
      <div className="list-items">
        <h4>Lista de Clientes</h4>
        <ul className="list-items-ul">
          <li>Nome</li>
        
          <li>Endereço</li>

          <li>Bairro</li>       

          <li>Cidade</li>       

          <li>UF</li>       

          <li>Telefone</li>        

          <li>Email</li>
        </ul>
      </div>

    );
}
        {/* <div className="header">
          <form>
            <input placeholder="enter task">
            </input>
            <button class="btn btn-primary" type="submit">add</button>
          </form>
        </div> */}