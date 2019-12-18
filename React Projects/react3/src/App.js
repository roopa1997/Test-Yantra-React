import React from 'react';
import './App.css';
import ComponentD from './components/component-d/ComponentD';

class App extends React.Component{

  state={
userName:'Roopa'
  }
render(){
  return (
    <div>

      <ComponentD name={this.state.userName}/>
    </div>
  );
}
 
}

export default App;
