// JSX Syntax
const element = <h1> Hello, World</h1>


const userName = 'Dulquer'
// within jsx , pass js expression within {}
const greet = <h1> Hello {userName} </h1>
const items =['Deodrant','saree','shoe']
const list = <ul>
    {
        items.map((item,index) => {
         <li key ={item+index}> {item} </li>
})
    }
</ul>

 
//ReactDOM.render(list, document.getElementById('react-container'))

// ReactDOM.render(greet, document.getElementById('react-container'))



