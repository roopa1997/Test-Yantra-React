import React from 'react'
function Login(props) {
    let logincard = {
        boxShadow: "0 0 7px 0px grey",
        marginTop: "7%"
    }
    return (
        <div>
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
    )
}
export default Login