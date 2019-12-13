function App(props) {
    return (
        <div>
            <Home homeName="Oila"/>
            <List list = {['Bag','Book','Pen']} />
        </div>
    )
}

function List(props){
return (
    
    <ul>
        {/* loops through the array in the parent */}
        {props.list.map((val,index)=>{
        return <li key={val+index}>{val} </li>
        })}
    </ul>
    
)
}

function Home(props) {
    return (
        <div>
            {/* pass data from parent to child through props */}
            {props.homeName}
           
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'))