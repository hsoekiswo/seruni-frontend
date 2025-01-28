import { useState } from 'react'
import Title from '../../components/Title';

function Registration() {
  const URL = 'https://seruni-backend-production.up.railway.app';

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  });
  const [users, setUsers] = useState({});

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // mode: 'no-cors',
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  const handleUser = async() => {
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.status === 204 ? null : await response.json();
      console.log('Response from backend:', data);

      if (response.ok) {
        setUsers(data);
      } else {
        alert('Error get users!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  }

  return (
    <>
      <Title title="Registration" />
      <div className='wrapper'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            autoComplete='off' ></input>
          <br></br>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <button type='submit'>Register</button>
        </form>
        <div>
          <h2>Users</h2>
          <button type='submit' onClick={handleUser}>Generate User</button>
          <p>{JSON.stringify(users)}</p>
        </div>
      </div>
    </>
  );
}

export default Registration;
