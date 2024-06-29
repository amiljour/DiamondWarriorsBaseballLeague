import { useState, useEffect } from 'react';
import { db, collection, getDocs, updateDoc, doc } from '../firebase.js';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await getDocs(collection(db, 'users'));
      const usersList = usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const filteredUsers = usersList.filter(user => user.email !== currentUser.email);
      setUsers(filteredUsers);
    };
    fetchUsers();
  }, [currentUser]);

  const handleRoleChange = async (userId, newRole) => {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { role: newRole });
    setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset email sent to ${email}`);
    } catch (error) {
      console.error("Error resetting password: ", error);
      alert(`Failed to send password reset email to ${email}`);
    }
  };

  const disableAccount = async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    try {
      await updateDoc(userDocRef, { disabled: true });
      setUsers(users.map(user => user.id === userId ? { ...user, disabled: true } : user));
      alert(`Account disabled successfully`);
    } catch (error) {
      console.error("Error disabling account: ", error);
      alert(`Failed to disable account`);
    }
  };

  const renderUserList = (role, title, link) => (
    <div className="flex justify-center w-full" key={role}>
      <div className="flex flex-col items-center w-10/12 border border-gray-300 rounded p-4 mb-8">
        <a href={link} className="text-2xl font-bold mb-4 underline">{title}</a>
        <div className="flex flex-wrap justify-center w-full">
          <ul className="flex flex-wrap justify-center">
            {users.filter(user => user.role === role && !user.disabled).map(user => (
              <li key={user.id} className="py-3 m-3 border border-gray-300 w-80 h-auto flex flex-col items-center rounded p-4">
                <p>Email:  &nbsp;{user.email}</p>
                <p>
                  Role: &nbsp;
                  <select
                    className="select select-secondary my-3"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    <option value="waiting">Waiting</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                    <option value="admin">Admin</option>
                  </select>
                </p>
                <button
                  className="m-2 bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => resetPassword(user.email)}
                >
                  Reset Password
                </button>
                <button
                  className="m-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => disableAccount(user.id)}
                >
                  Disable Account
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderDisabledUsers = () => (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center w-10/12 border border-gray-300 rounded p-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Disabled Accounts</h2>
        <div className="flex flex-wrap justify-center w-full">
          <ul className="flex flex-wrap justify-center">
            {users.filter(user => user.disabled).map(user => (
              <li key={user.id} className="py-3 m-3 border border-gray-300 w-80 h-auto flex flex-col items-center rounded p-4">
                <p>Email: {user.email}</p>
                <button
                  className="m-2 bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => enableAccount(user.id)}
                >
                  Enable Account
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const enableAccount = async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    try {
      await updateDoc(userDocRef, { disabled: false });
      setUsers(users.map(user => user.id === userId ? { ...user, disabled: false } : user));
      alert(`Account enabled successfully`);
    } catch (error) {
      console.error("Error enabling account: ", error);
      alert(`Failed to enable account`);
    }
  };

  return (
    <div>
      <div className="text-center text-black py-3">
        <h1 className='text-3xl font-bold py-3'>Admin Dashboard</h1>
        {renderUserList('waiting', 'Waiting for Access')}
        {renderUserList('team1', 'Team 1', '/team1-admin')}
        {renderUserList('team2', 'Team 2', '/team2-admin')}
        {renderUserList('admin', 'Admin')}
        {renderDisabledUsers()}
      </div>
    </div>
  );
};

export default AdminDashboard;