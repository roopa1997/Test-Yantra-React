import React from 'react';
import Search from './components/search/Search';
import Display from './components/display/Display';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  state = {
    enteredInput: false,
    inputValue: '',
    recievedSearchData: false
  }
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
      enteredInput: true

    })
  }
  onRecieveFromSearch = (searchData) => {
    console.log('search data recieved',searchData)
    this.setState({
      movie: searchData,
      recievedSearchData : true
    })
    console.log(this)
  }
  /* clearSearchBox=()=>{
    this.setState({
      inputValue:''
    })
  } */

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Search.." value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} id="search" />
        <button type="submit" /*  onClick={this.clearSearchBox} */ id="searchMoviebtn"><i className="fa fa-search"></i>Search</button>
        <Search recieveFromSearch={this.onRecieveFromSearch} sendToSearch={this.state.inputValue} />
        <Display />
      </div>
    )
  }

}

export default App;
