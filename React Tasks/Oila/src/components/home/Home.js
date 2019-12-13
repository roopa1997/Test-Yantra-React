import React from 'react'
function Home(props){
    let imgstyle = {
        height: "300px",
        width: "50%",
        marginLeft: "25%",
        marginTop: "4%"
    }

    return(
        <div>
            <img src="lion.jpg"  style={imgstyle} />
        </div>
    )
}
export default Home