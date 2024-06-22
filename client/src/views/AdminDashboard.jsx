import { useState, useEffect } from 'react';
import { db, collection, getDocs, updateDoc, doc } from '../firebase.js';

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

  const handleRoleChange = async (userId, newRole) => {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { role: newRole });
    setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
  };

  return (
    <div>
      <div className="text-center py-3">
        <h1 className='text-3xl font-bold py-3'>Admin Dashboard</h1>
        <ul>
          {users.map(user => (
            <li key={user.id} className='py-3'>
              {user.email} - {user.role}
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
                <option value="waiting">Waiting</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;