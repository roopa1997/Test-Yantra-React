class Header extends React.Component{
    constructor(props){
        //since am extending some class first super must be called and then the header !
        super(props)
        console.log(props)
    }
    render(){
        return React.createElement('h1',null,'This is header')
    }
}

class Footer extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return React.createElement('h1',null,'This is footer')
    }
}

class Content extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return React.createElement('h1',null,'This is Content')
    }
}


const header = React.createElement(Header,{headervalue : 'hello'})
const footer = React.createElement(Footer,{footervalue : 'footer'})
const content = React.createElement(Content,{contentvalue : 'content'})
const all = React.createElement('div',null,header,content,footer)

ReactDOM.render(all,document.getElementById('react-container'))