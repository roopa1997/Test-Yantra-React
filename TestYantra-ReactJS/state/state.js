
// state must always be a 
class Welcome extends React.Component {
    state = {
        name: 'Chandan'
    }
    constructor(props) {
        super(props)
        console.log(this)
        this.ShowMessage= this.ShowMessage.bind(this)
    }
    greet() {
        console.log('hello', this.state.name)
    }
    ShowMessage() {
        //we get this only when we pass this within the bind function else we get undefined when we call name 
        console.log('Binding in constructor ',this.state.name)
    }
    // best way of writing the functions !!
    // no need to worry aout binding and all
    // if we use bind explicitely we must bind this in constructor !
    handleClick=()=>{
        console.log('Inside arrow functions ',this.state.name)
    }
    render() {
        console.log('hello', this.state.name)
        return (
            <div>
                <h1> Hello, {this.state.name}</h1>
                <button onClick={() => alert('Hello')}>
                    Arrow function
                    </button>
                <button onClick={this.greet.bind(this)}>
                    Bind method 
                    </button>
                <button onClick={this.ShowMessage}>Binding in consructor</button>
                <button onClick={this.handleClick}>using arrow functions</button>

            </div>
        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById('react-container'))
