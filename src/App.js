import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h2>User Loaded: {users.length}</h2>
      {
        users.map(user => <User name={user.name} phone={user.phone} email={user.email} website={user.website}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className="user-design">
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Website: {props.website}</p>
    </div>
  );
}

function MyComponent() {
  const [points, setPoints] = useState(1);

  const handlePoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div>
      <h2>Welcome to React World</h2>
      <h4>I Have Point: {points}</h4>
      <button onClick={handlePoints}>Add Points</button>
    </div>
  );
}

export default App;
