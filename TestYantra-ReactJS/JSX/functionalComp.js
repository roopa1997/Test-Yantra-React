function Header(props){
    return <h1> This is Header </h1>
}
//ReactDom.render(<Header />, document.getElementById('react-container'))

function Content(props){
    return <p> welcome {props.userName} </p>
}
function Footer(props){
    return <h1> This is Footer </h1>
}

ReactDOM.render(<div>
    <Header />
    <Content userName='vishnu' /><Footer />
    </div>,
    document.getElementById('react-container'))