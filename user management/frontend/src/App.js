import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "/users";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch users on load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  const handleSubmit = async () => {
    if (editingId) {
      // Update
      const res = await axios.put(`${API}/${editingId}`, form);
      setUsers(users.map(u => u._id === editingId ? res.data : u));
      setEditingId(null);
    } else {
      // Create
      const res = await axios.post(API, form);
      setUsers([...users, res.data]);
    }
    setForm({ name: "", email: "", age: "" });
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, age: user.age });
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  return (
  <div className="container">
    <h2>User Management System</h2>

    <input
      placeholder="Name"
      value={form.name}
      onChange={e => setForm({ ...form, name: e.target.value })}
    />
    <input
      placeholder="Email"
      value={form.email}
      onChange={e => setForm({ ...form, email: e.target.value })}
    />
    <input
      placeholder="Age"
      type="number"
      value={form.age}
      onChange={e => setForm({ ...form, age: e.target.value })}
    />
    <button onClick={handleSubmit}>
      {editingId ? "Update User" : "Add User"}
    </button>

    <ul className="user-list">
      {users.map(u => (
        <li key={u._id}>
          <span>{u.name} ({u.email}) - {u.age} yrs</span>
          <div>
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(u._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;
