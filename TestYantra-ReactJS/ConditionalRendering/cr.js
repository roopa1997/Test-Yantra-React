class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adminName: 'Chandru',
            userName: 'Giri',
            isAdmin: true,
            adminId: 2,
            userId: 1
        }
    }


    changeUserAdmin = ()=>{
        this.setState({
            isAdmin : !this.state.isAdmin
        })
    }
    navigateToGoogle=(event)=>{
        console.log('Event',event)
        event.preventDefault();
    }


    render() {
        const admin = <div>
            <h1>
                {this.state.adminName}
            </h1>
            <h4>{this.state.adminId}</h4>

        </div>

        const user = <div>
            <h1>
                {this.state.userName}
            </h1>
            <h4>{this.state.userId}</h4>
        </div>



        return (


            <div>
                {this.state.isAdmin ? admin : user}
                <p>Home</p>
                <p>Login</p>
                <a href="http://www.google.com" onClick={this.navigateToGoogle}>Navigate to Google </a>
                <button onClick = {this.changeUserAdmin}>click to change state</button>
                
            </div>
        )
        // can write if here 
        // inside jsx if must not be used 
        // if (this.state.isAdmin) {
        //     return (
        //         <div>
        //     <h1>{this.state.adminName}</h1>
        //     <button>click </button>
        //     </div>
        //     )
        // }
        // else {
        //    return  <h1> hi, {this.state.userName}</h1>
        // }
        // most of the times we use conditional operator instead of if
          return (
             <div>
                 <h1>
                     {this.state.isAdmin ? this.state.adminName : this.state.userName}
                 </h1>
                 <h1>
                     {this.state.isAdmin?this.state.adminId: this.state.userId}
                 </h1>
             </div>
         ) 

    }
}
ReactDOM.render(<ConditionalRendering />, document.getElementById('react-container'))
