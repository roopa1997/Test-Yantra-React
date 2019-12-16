import React from 'react';
import './Display.css'
function Display(props) {

    return (
        <div className="listContainer ">
            {console.log(props.send)}
            {props.send.map((val, k) => {
                return (<div className="listClass" key={k + 1}>

                    <div className="card float-left col-md-4 " >
                        <img src={val.Poster} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{val.Title}</h5>
            
                        </div>


                    </div>
                </div>
                )
            })}
        </div>
    )
}
export default Display;