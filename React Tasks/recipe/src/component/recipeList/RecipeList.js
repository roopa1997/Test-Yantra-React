import React from 'react';
import './RecipeList.css';
function RecipeList(props) {
     let card,cardTitle,img,cardText,cardBody; 
let arr=props.list;

    return (
        <div className="listContainer">
            {arr.map((val, index) => {
                return (<div className="listClass" key={val + index}>
                    <div className="card  " onClick={(event) => { props.data(val) }} >
                        <img src={val.img} ></img>
                        <h5 className="cardTitle">{val.name}</h5>
                        <div className="cardBody">
                            {/*  <p> Ingredients : {val.ingredients}
                            </p> */}
                           <p></p>
                        </div>
                    </div>

                </div>

                )

            })}
        </div>
    )

}
export default RecipeList;