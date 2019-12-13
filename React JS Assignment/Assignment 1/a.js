function Header(params){
    return React.createElement('ul',{className:"topnav"},
    React.createElement('li', null, React.createElement('a',{className:"active"},'Home')),
    React.createElement('li', {className:"right"},React.createElement('a',null,'Register')),
    React.createElement('li', {className:"right"},React.createElement('a',null,'Login')))

}
const header = React.createElement(Header,{className:'header'})

function Content(params){
    return React.createElement('div',{className:'container'}, 
    React.createElement('div',{className:'col-md-3 offset-1 float-left'},
    React.createElement('img',{scr:'./images.jpg'})
    ),
    React.createElement('div',{className:'col-md-3 offset-1 float-left'},
    React.createElement('img',{scr:'./images.jpg',className:'img'})
    ),
    React.createElement('div',{className:'col-md-3 offset-1 float-left'},
    React.createElement('img',{scr:'./images.jpg'})
    )

    )
}
const content = React.createElement(Content,{className:'content'})
 

ReactDOM.render(content, document.getElementById('react-container'))
