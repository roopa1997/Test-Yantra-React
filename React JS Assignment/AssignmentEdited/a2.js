

class Welcome extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        home: '',
        login:'def',
        register:'ghi',
        isAdmin: true
        

    }


    homeClick = () => {
        console.log('inside home ')
        this.setState({
            home : 'abbbbccc'
        })

    }
    loginClick = () => {
        console.log('inside Login ')
        this.setState({
            login:'Login Page'
        })

    }
    registerClick = () => {
        console.log('inside Register ')
        this.setState({
            register:'register page'

        })

    }
    render() {

        console.log('inside render')
       
    const home = <p>{this.state.home}</p>
    const login = <p>{this.state.login}</p>
    const register = <p>{this.state.register}</p>


        return (

            <div>

                <button onClick={this.homeClick}>
                    Home
                    </button>
                <button onClick={this.loginClick}>
                    Login
                    </button>
                <button onClick={this.registerClick}>
                    Register
                    </button>

            </div>
        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById('react-container'))
