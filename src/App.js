import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
function App() {
  const adminUser = {
    email: "conghau@gmail.com",
    password: "conghau"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else{
      console.log("Detail do not match !")
      setError('Detail do not match !');
    }
  }
  const Logout = ()=> {
    console.log("Logout");
    setUser({name: "", email: ""});
  }

  return (
    <div className="app">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Wellcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
      </div>
  );
}

export default App;
