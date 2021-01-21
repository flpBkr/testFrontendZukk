import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from "../Context/AuthContext";
import ListForm from './ListForm';

import './Pages.css';

export default function List() {
  const { handleLogout } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/list');

      setUsers(data);
    })();
  }, []);

  return (
    <div>
      <div className="container">
        <p>
          Usuário: 
          {users.map((user) => (
            <span key={user.id}> {user.name}</span>
          ))}
        </p>

        <ListForm />

        <button type="button" class="btn btn-outline-dark btn-sm btn-logout" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
