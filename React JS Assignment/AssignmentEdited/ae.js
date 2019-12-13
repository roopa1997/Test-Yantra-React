
// state must always be a 
class App extends React.Component {

    HomeClicked = (props) => {
        
        if (props.display) {
            return <ul className="topnav">
            <li><a className="active" href="#home" > Home </a></li>
                    <li className="right"><a href="#" onClick={this.RegisterClicked}>Register  </a></li>
                    <li className="right"><a href="#about">Login</a></li>
                </ul>

            
        }
        
    }
    RegisterClicked = (props)=>{
        if (props.display) {
            console.log('now it came to register')
        return <p>hi, this is register page</p>
        }
    }

   

    
    render() {
        // what ever we wnat to display in UI we write here
        console.log('inside render', this)
        return (
           
            (
                <div>
                <this.HomeClicked display={true} />
                <this.RegisterClicked display={true}/>
                </div>

            )
        )
    }
}
ReactDOM.render(<App />, document.getElementById('react-container'))
