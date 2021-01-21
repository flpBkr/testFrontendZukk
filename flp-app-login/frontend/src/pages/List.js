import React, { useState, useEffect, useContext } from 'react';

import api from '../api';
import { Context } from "../Context/AuthContext";
import ListItems from './ListItems';
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
        <h3>
          Usuário: 
          {users.map((user) => (
            <span key={user.id}> {user.name}</span>
          ))}
        </h3>

        <ListItems />

        <button type="button" class="btn btn-outline-dark btn-sm" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
