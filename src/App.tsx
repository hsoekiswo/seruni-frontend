import './App.css';
import Registration from './routes/Registration/Registration';
import Login from './routes/Login/Login';

function App() {
  return (
    <>
      <div className='wrapper'>
        <div>
          <Registration/>
        </div>
        <div>
          <Login/>
        </div>
      </div>
    </>
  );
}

export default App;
