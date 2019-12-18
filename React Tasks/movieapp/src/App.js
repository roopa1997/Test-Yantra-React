import React from 'react';
import './App.css';
import Display from './components/display/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  state = {
    query: '',
    resultdata: [],
    url: ''
  }
  updateInputValue = (e) => {
     
    this.setState({
      query: e.target.value
    });
  };
  search = () => {
    //fetch api 
    const url1 = 'http://www.omdbapi.com/?s='
    const url2 = '&apikey=d0c2d96b'
    const take = this.state.query
    const url3 = url1.concat(take)
    const url = url3.concat(url2)
    this.setState({
      url: url
    })

    fetch(url)
      .then(results => results.json())
      .then(data => {

        this.setState({
          resultdata: data.Search,
          fetched: true
        });


      });
  };

  render() {

    return (
      <div>
        <h3>Search Movie Here</h3>
        <input type="text" placeholder="Search.." ref="myInput" onChange={this.updateInputValue} id="search" />
        <button type="submit" onClick={this.search} id="searchMoviebtn"><i className="fa fa-search"></i>Search</button>
        <div className="movieContainer">
          <Display send={this.state.resultdata} />
        </div>
      </div>
    )
  }

}

export default App;
