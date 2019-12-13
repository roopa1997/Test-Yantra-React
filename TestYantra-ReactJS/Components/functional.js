/* function Header({headerName}){
    console.log('props', headerName)
    return React.createElement('h1',null,'Header')
}
 const header = React.createElement(Header,
    {
        headerName : 'this is a header',
        id : 'header',
        show : true
    },'header Component')
 ReactDOM.render(header, document.getElementById('react-container')) 
 to use only one attribute among prop we can use object destructuring
 */
 function Header(props){
    console.log('props', props)
    
    return React.createElement('h1',null,'Header')
}

function Footer(props){
    return React.createElement('p',null,'this is content')
}

function Content(props){
    return React.createElement('h1',null,'this is footer')
}

const content = React.createElement(Content)
const footer = React.createElement(Footer)
const header = React.createElement(Header,
    {
        headerName : 'this is a header',
        id : 'header',
        show : true
    },'header Component')

const homePage = React.createElement('div',null,header,content,content,footer)


ReactDOM.render(homePage,document.getElementById('react-container'))

 
//     const multipleHeaders = React.createElement('div',null,header,header,header)
//  ReactDOM.render(multipleHeaders, document.getElementById('react-container'))