import { useState } from 'react'
import { handleChange } from '../../utils/form';
import { BackNav } from '../../components/Nav';

function Login() {
    const URL = 'https://seruni-backend-production.up.railway.app';
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleLogin = async(e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const response = await fetch(`${URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const token = response.status === 204 ? null : await response.json();
  
        if (response.ok) {
          // Code to input token to cookies
          document.cookie = `token=${token}; path=/; max-age=3600`; // Expires in 1 hour
          alert('Login successful!');
        } else {
          alert('Error during login!');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error during login.');
      }
    }
  
    return (
      <>
        <BackNav />
        <div className='form-background'>
          <div className='form-container'>
            <h1 className='form-title'>Login</h1>

            <form onSubmit={handleLogin}>
              <div className='mb-4'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={(e) => {handleChange(e, setFormData, formData)}}
                  autoComplete='off'
                  className='form-input'
                >  
                </input>
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={(e) => {handleChange(e, setFormData, formData)}}
                  autoComplete='off'
                className='form-input'
                ></input>
              </div>
              <button
                type='submit'
                className='form-button'>
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;