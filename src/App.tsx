import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

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
