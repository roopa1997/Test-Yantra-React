
// state must always be a 
class Welcome extends React.Component {
    state = {
        name: 'Chandan',
        show: false
    }
    constructor(props) {
        super(props)
        console.log('inside constuctor ')

    }


    handleClick = () => {
        console.log('inside handleClick ', this)
        console.log('Inside arrow functions ', this.state.name)
        // never mutate the state direcly
        /*  this.state.name='shibu' */
        // if we do not use this here it will tell setState undefined
        this.setState({
            name: 'Shibu'
            
        })
    }
    render() {
        // what ever we wnat to display in UI we write here
        console.log('inside render', this)
        return (
            <div>
                <h1> Hello, {this.state.name}</h1>

                <button onClick={this.handleClick}>
                    click here to change the name
                    </button>

            </div>
        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById('react-container'))
