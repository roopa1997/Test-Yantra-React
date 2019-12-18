import React from 'react'
import { render } from '@testing-library/react'
class CreateAccount extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        uname: '',
        showName: false,
        password: '',
        showPassword: false,
        phone: '',
        showPhone: false,
        email: '',
        showEmail: false
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
       
        console.log(this)

    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name } = this.state
       if (this.state.uname.match(/^([a-zA-Z ]){2,8}$/)) {
            this.setState({
                showName: false
            })
        } else {
            this.setState({
                showName: true
            })
        }  
         if (this.state.password.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)) {
            this.setState({
                showPassword: false
            })
        }
            else {
                this.setState({
                    showPassword: true
                })
        } 
        if(this.state.phone.match(/^[0-9]{10}$/)){
            this.setState({
                showPhone: false
            })
        }else{
            this.setState({
                showPhone: true
            })
        }
        if(this.state.email.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ )){
            this.setState({
                showEmail: false
            })
        }else{
            this.setState({
                showEmail: true
            })
        }
    }

    render() {
        let registercard = {
            boxShadow: "0 0 7px 0px grey",
            marginTop: "7%"
        }
        const errorStyle = {
            color: 'red',
            fontSize: '15px'
        }



        return (

            <div className=" card col-md-4 offset-4 mt-5 ">
                <form className="form " onSubmit={this.handleSubmit} >
                    <legend className="h1 card-header">Create Form</legend>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text"
                            name="uname"
                            className="form-control"
                            placeholder="enter username"
                            value={this.state.uname}
                            onChange={this.handleChange} />

                    </div>
                    {this.state.showName ? <p style={errorStyle}>Invalid Userame</p> : null}
                    <div className="form-group">
                        <label htmlFor="">password</label>
                        <input type="text"
                            name="password"
                            className="form-control"
                            placeholder="enter password"
                            value={this.state.password}
                            onChange={this.handleChange} />

                    </div>
                    {this.state.showPassword ? <p style={errorStyle}>Invalid password</p> : null}
                    <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input type="text"
                            name="phone"
                            className="form-control"
                            placeholder="enter phone"
                            value={this.state.phone}
                            onChange={this.handleChange} />

                    </div>
                    {this.state.showPhone ? <p style={errorStyle}>Invalid phone</p> : null}
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            name="email"
                            className="form-control"
                            placeholder="enter email"
                            value={this.state.email}
                            onChange={this.handleChange} />

                    </div>
                    {this.state.showEmail ? <p style={errorStyle}>Invalid email</p> : null}

                    <button className="btn mt-3 mb-2" type="submit" className="btn btn-primary">login </button>

                </form>
            </div>

          
        )
    }

}

export default CreateAccount
