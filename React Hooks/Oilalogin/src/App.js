 import React,{ useState } from 'react'; 
import './App.css';
import Routing from './Routing'
import { UserProvider } from './context/UserContext';

function App(){

   let login = {
    login: false,
    setLog: (value)=>{
console.log(value)
change(value);
    }
  }

  const change = (value) => {
    setUserLogin({
      ...userLogin,
      login: value
    })
  }
  const [userLogin , setUserLogin] = useState(login) 

  return (
    
   <UserProvider  value={userLogin}  >
   <Routing />
   </ UserProvider>
   
  )
}

export default App;
