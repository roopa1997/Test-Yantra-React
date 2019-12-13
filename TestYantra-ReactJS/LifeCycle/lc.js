// life cycle methods apply for class components

class Parent extends React.Component {
    constructor(props) {
        super(props)
        console.log('parent constructor')
        this.state = {
            name: 'lifecycle'
        }
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log('parent getDerivedStateFromProps ')
        return null
    }
    changeName = () => {
        this.setState({
            name: 'updationPhase',
            show: true
        })
    }
    removeChild = () => {
        this.setState({
            show: false
        })
    }

    render() {
        console.log('Parent render')
        return (
            <div>
                <h1>Parent component</h1>
                <Child />
                <button onclick={this.changeName}>change name</button>
                <button onclick={this.removeParent}>remove parent</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('parent componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('parent shoulsComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('parent getSnapshotBeforeUpdate ')
        console.log('previous state', prevState)
        console.log('current state', this.state)
        return "Scrolling position"
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('------------Parenet component did update -------------')
        console.log('previous state ', prevState)
        console.log('Snapshot', snapShot)
    }
    componentWillUnmount() {
        console.log('--------parent componentwillunmount-------')
    }
   

}
class Child extends React.Component {
    constructor(props) {
        super(props)
        console.log('----------child constructor------------- ')
    }
    render() {
return(
    <div>
        <h1>Child Component</h1>
    </div>
)
    }
}

ReactDOM.render(<Parent />, document.getElementById('react-container'))