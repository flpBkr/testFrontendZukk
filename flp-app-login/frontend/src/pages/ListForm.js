import React from 'react';

import './Pages.css';
// {
//   "cep": "12235-440",
//   "logradouro": "Rua Cosmos",
//   "complemento": "",
//   "bairro": "Jardim Paraíso",
//   "localidade": "São José dos Campos",
//   "uf": "SP",
//   "ibge": "3549904",
//   "gia": "6452",
//   "ddd": "12",
//   "siafi": "7099"
// }
export default function ListForm(){
    function onBlurCep(e) {
      const { value } = e.target;

      const cep = value.replace(/[^0-9]/g, "");

      if (value?.length !== 8) {
        return;
      }
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    return (
      <div className="list-form">
        <h4>Cadastrar Clientes</h4>

        <label className="form-label">Nome</label>
        <div className="input-group input-group-sm mb-3">
          <input name="name" type="text" className="form-control" placeholder="Nome" />
        </div>

        <label className="form-label">Cep</label>
        <div className="input-group input-group-sm mb-3">
          <input name="cep" type="text" className="form-control" placeholder="CEP" onBlur={onBlurCep}/>
        </div>

        <label className="form-label">Rua</label>
        <div className="input-group input-group-sm mb-3">
          <input name="logradouro" type="text" className="form-control" placeholder="Rua"/>
        </div>

        <label className="form-label">Bairro</label>
        <div className="input-group input-group-sm mb-3">
          <input name="bairro" type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" />
        </div>

        <label className="form-label">Cidade</label>
        <div className="input-group input-group-sm mb-3">
          <input name="localidade" type="text" className="form-control" placeholder="Cidade" />
        </div>

        <label className="form-label">UF</label>
        <div className="input-group input-group-sm mb-3">
          <input name="uf" type="text" className="form-control" placeholder="UF" />
        </div>

        <label className="form-label">DDD</label>
        <div className="input-group input-group-sm mb-3">
          <input name="ddd" type="tel" className="form-control" placeholder="Código de área" />
        </div>

        <label className="form-label">Telefone</label>
        <div className="input-group input-group-sm mb-3">
          <input type="tel" className="form-control" placeholder="Número do telefone" />
        </div>

        <label className="form-label">Email</label>
        <div className="input-group input-group-sm mb-3">
          <input name="email" type="email" className="form-control" placeholder="Insira um email válido" />
        </div>

        <div className="input-group mb-3">
          <button class="btn btn-primary" type="submit">Cadastrar Cliente</button>
        </div>


      </div>
    );
}