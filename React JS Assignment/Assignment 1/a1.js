// class App{
//     constructor(props)
// }
function Header(props) {
    return <ul className="topnav">
<li><a className="active" href="#home">Home  </a></li>
        <li className="right"><a href="#">Register </a></li>
        <li className="right"><a href="#about">Login</a></li>
    </ul>

}
//ReactDom.render(<Header />, document.getElementById('react-container'))

function Content(props) {
    return <div className="container">

<div className='col-md-3 float-left mt-4 '>
<img src ="./download.jpg" className="img" />
</div>
<div className='col-md-3 offset-1 float-left mt-4  '>
<img src ="./images.jpg" className="img" />
</div>
<div className='col-md-3 offset-1 float-left mt-4  '>
<img src ="./images.jpg" className="img" />
</div>


    </div>
}
function Footer(props) {
    return <p className="footer">footer</p>
}

ReactDOM.render(<div>
    <Header />
    <Content />
    <Content />
    <Content />
    <Footer />
</div>,
    document.getElementById('react-container'))




