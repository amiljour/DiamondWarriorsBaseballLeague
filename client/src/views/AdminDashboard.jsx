// src/views/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, updateDoc, doc } from '../firebase';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await getDocs(collection(db, 'users'));
      const usersList = usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const handleApprove = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { role: 'parent' });
    setUsers(users.map(user => user.id === userId ? { ...user, role: 'parent' } : user));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email} - {user.role}
            {user.role === 'waiting' && (
              <button onClick={() => handleApprove(user.id)} className="btn btn-success">Approve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;