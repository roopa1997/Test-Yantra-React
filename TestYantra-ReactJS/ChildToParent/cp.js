class Parent extends React.Component {
    state = {
        message: 'Parent data'
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Passing the method as props o child  */}
                <Child  action={this.getDataFromChild} />
            </div>
        )
    }
    getDataFromChild = (childData) => {
        console.log('child data', childData)
        this.setState({
            message : 'Child Data'
        })
    }
}
function Child(props) {
    return (
        <div>
            <button onClick={() => {
                props.action('this is child data')
            }}>passs the data to parent</button>
        </div>
    )
}
ReactDOM.render(<Parent />, document.getElementById('react-container'))