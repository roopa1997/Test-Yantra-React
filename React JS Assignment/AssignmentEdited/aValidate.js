class Welcome extends React.Component {
    state = {

        /*  mode:*/
        click: true,
        click1: false,
        click2: false

    }
    constructor(props) {
        super(props)
        console.log('inside constuctor ')

    }



    selectMode=(p)=> {
        if (p === 'click') {
            this.setState({
                click: true,
                click1: false,
                click2: false
            })
        }

        if (p === 'click1') {
            this.setState({
                click: false,
                click1: true,
                click2: false
            })
        }

        if (p === 'click2') {
            this.setState({
                click: false,
                click1: false,
                click2: true

            })
        }
    }

    //validation
    formSubmitted=()=>{
        
    }


    render() {
        // what ever we wnat to display in UI we write here
        console.log('inside render', this)
        let imgstyle = {
            height: "300px",
            width: "50%",
            marginLeft: "25%",
            marginTop: "4%"
        }
        let logincard = {
            boxShadow: "0 0 7px 0px grey",
            marginTop: "7%"
        }
        let registercard = {
            boxShadow: "0 0 7px 0px grey",
            marginTop: "7%"
        }

        const home = <div ><img src="./lion.jpg" style={imgstyle} /></div>


        const loginpg = <div>

            <div className="card col-md-6 offset-3" style={logincard}>

                <form name="userForm" className="formclass mt-2" id="form1">
                    <div className="form-group ">
                        <label for="email">Email</label>
                        <input type="text" className="form-control" id="email" name="email" placeholder="enter email" />
                        <p id="p3 " className=" invisible">enter a valid email</p>
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                            placeholder="enter password" />
                        <p id="p5" className=" invisible">enter password correctly</p>
                    </div>
                    <div className="form-group ">
                        <div className="row">
                            <div className="col-md-6"><button type="button" id="formSubmitButton"
                                className="btn btn-success ">Login</button>
                            </div>


                        </div>

                    </div>
                </form>
            </div>


        </div>
        const registerpg = <div>

            <div className="card col-md-6 offset-3 " style={registercard}>
                <form name="userForm" className="formclass mt-2 " id="form1">
                    <div className="form-group ">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="name" name="name">Name</span>
                            </div>
                            <input type="text" className="form-control" placeholder="enter name" />

                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="age" name="age">age</span>
                            </div>
                            <input type="number" className="form-control" placeholder="enter age" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="age" phone="age">phone</span>
                            </div>
                            <input type="number" className="form-control" placeholder="enter phone" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="email" phone="email">email</span>
                            </div>
                            <input type="email" className="form-control" placeholder="enter email" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="password" phone="password">password</span>
                            </div>
                            <input type="password" className="form-control" placeholder="enter password" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="row">
                            <div className="col-md-6"><button type="button" id="formSubmitButton" onclick={this.formSubmitted}
                                className="btn btn-success">Submit</button>
                            </div>
                            <div className="col-md-6"><button type="button" id="formClearButton"
                                className="btn btn-success float-right">Clear</button>
                            </div>

                        </div>

                    </div>
                </form>
            </div>


        </div>


        return (


            <div>

                <ul className="topnav">
                    <li><a className="active" href="#home" onClick={this.selectMode.bind(this, 'click')} >Home  </a></li>
                    <li className="right"><a href="#" onClick={this.selectMode.bind(this, 'click1')} >Register </a></li>
                    <li className="right"><a href="#about" onClick={this.selectMode.bind(this, 'click2')} >Login</a></li>
                </ul>

                {/* <button onClick={this.homeClick}>
                    Home
                    </button>
                    <button onClick={this.loginClick}>
                    Login
                    </button>
                    <button onClick={this.registerClick}>
                    Register
                    </button>
                    <div> {this.state.home}</div> */}

                {this.state.click ? home : ''}
                {this.state.click1 ? registerpg : ''}
                {this.state.click2 ? loginpg : ''}


            </div>
        )
    }
}
function Footer(props) {
    return <p className="footer">This is Footer</p>
}

ReactDOM.render(<div><Welcome /><Footer /></div>, document.getElementById('react-container'))
