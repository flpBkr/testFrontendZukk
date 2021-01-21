import React from 'react';

import './Pages.css';

export default function TheList(){
    return (
      <div className="list">
        <label className="form-label">Nome</label>
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
        </div>

        <label className="form-label">Endereço</label>
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" placeholder="Nome da Rua, Número" aria-label="Nome da Rua, Número" />
        </div>

        <label className="form-label">Bairro</label>
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" />
        </div>

        <label className="form-label">Cidade</label>
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" />
        </div>

        <label className="form-label">UF</label>
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" placeholder="UF" aria-label="UF" />
        </div>

        <label className="form-label">Telefone</label>
        <div className="input-group input-group-sm mb-3">
          <input type="tel" className="form-control" placeholder="Código de área e número do telefone" aria-label="Código de área e número do telefone" />
        </div>

        <label className="form-label">Email</label>
        <div className="input-group input-group-sm mb-3">
          <input type="email" className="form-control" placeholder="Insira um email válido" aria-label="Insira um email válido" aria-describedby="basic-addon2" />
        </div>

        <div className="input-group mb-3">
          <button class="btn btn-primary" type="submit">Cadastrar Cliente</button>
        </div>


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