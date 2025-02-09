import { useState } from 'react'
import { handleChange, handleLogin } from '../../utils/form';
import { BackNav } from '../../components/Nav';

function Login() {
    const path = '/login'
    const URL = 'https://seruni-backend-production.up.railway.app' + path;
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    return (
      <>
        <BackNav />
        <div className='form-background'>
          <div className='form-container'>
            <h1 className='form-title'>Login</h1>

            <form onSubmit={(e) => handleLogin(e, URL, params)}>
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