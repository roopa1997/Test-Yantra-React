import React from 'react'
function CreateAccount(props) {

    let registercard = {
        boxShadow: "0 0 7px 0px grey",
        marginTop: "7%"
    }

    return (

        < div className="card col-md-6 offset-3 " style={registercard} >
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
                        <div className="col-md-6"><button type="button" id="formSubmitButton"
                            className="btn btn-success">Submit</button>
                        </div>
                        <div className="col-md-6"><button type="button" id="formClearButton"
                            className="btn btn-success float-right">Clear</button>
                        </div>

                    </div>

                </div>
            </form>
        </div >

    )
}
export default CreateAccount
