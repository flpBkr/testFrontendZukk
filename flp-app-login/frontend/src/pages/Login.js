import React, { useContext } from 'react';

import { Context } from "../Context/AuthContext";
import './Pages.css';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.debug("Login", authenticated);

  return (
    <div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputEmail1" >User</label>
            <input type="text"  autoComplete="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
            <input type="password"  autoComplete="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="button" className="btn btn-primary" onClick={(e) => handleLogin(e)}>Log In</button>
        </form>
      </div>
    </div>

  );
}