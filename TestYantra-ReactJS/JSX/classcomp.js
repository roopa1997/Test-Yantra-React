class Header extends React.Component {
    render() {
        return <h1> This is Header </h1>
    }

}
//ReactDom.render(<Header />, document.getElementById('react-container'))

class Content extends React.Component {
    constructor(props){
        super(props)
       console.log(props)
    }
    
    render() {
    return <p> welcome </p>
    }

}
class Footer extends React.Component {
    render() {
        return <h1> This is Footer </h1>
    }
}


ReactDOM.render(<div>
    <Header />
    <Content userName='vishnu' /><Footer />
</div>,
    document.getElementById('react-container'))