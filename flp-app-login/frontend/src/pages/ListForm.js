import React from 'react';
import { Formik, Form, Field, setNestedObjectValues } from 'formik';

import './Pages.css';

export default function ListForm(){
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }
  function onBlurCep(e, setFieldValue) {
    const { value } = e.target;
    const cep = value.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('uf', data.uf);
        setFieldValue('ddd', data.ddd);
        console.log(data)
      })
  }
  return (
    <Formik 
      onSubmit={onSubmit}
      initialValues={{
        name: "",
        cep: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        ddd: "",
        phone: "",
        email: ""
      }}
      render={({ values, setFieldValue }) => (
      <Form>
        <h4>Cadastrar Clientes</h4>

        <label className="form-label">Nome</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="name" type="text" className="form-control" placeholder="Nome" />
        </div>

        <label className="form-label">Cep</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="cep" type="text" className="form-control" placeholder="CEP" onBlur={(e) => onBlurCep(e, setFieldValue)}/>
        </div>

        <label className="form-label">Rua</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="logradouro" type="text" className="form-control" placeholder="Rua" />
        </div>

        <label className="form-label">Bairro</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="bairro" type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" />
        </div>

        <label className="form-label">Cidade</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="cidade" type="text" className="form-control" placeholder="Cidade" />
        </div>

        <label className="form-label">UF</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="uf" type="text" className="form-control" placeholder="UF" />
        </div>

        <label className="form-label">DDD</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="ddd" type="tel" className="form-control" placeholder="Código de área" />
        </div>

        <label className="form-label">Telefone</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="phone" type="tel" className="form-control" placeholder="Número do telefone" />
        </div>

        <label className="form-label">Email</label>
        <div className="input-group input-group-sm mb-3">
          <Field name="email" type="email" className="form-control" placeholder="Insira um email válido" />
        </div>

        <div className="input-group mb-3">
          <button class="btn btn-primary" type="submit">Cadastrar Cliente</button>
        </div>
      </Form>
    )}/>
  );
}