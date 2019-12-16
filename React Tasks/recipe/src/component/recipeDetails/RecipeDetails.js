import React from 'react';
import './RecipeDetails.css'

function RecipeDetails(props) {
    let ing = props.list1.ingredients;
    let rounded = {
        borderRadius: '40%'
    }
    let detailsContainer 

    

    return (
        <div className="detailsContainer">

            <h3>{props.list1.name}</h3>

            <div >
               
                <img src={props.list1.img} style={rounded}></img>
                <h4>Recipe</h4>
                {ing.map((v, k) => {
                    return (
                        <div className="ingContainer "  key={v + k}>
                            {v}
                        </div>
                    )
                })}
            </div>

        </div>
    )

}
export default RecipeDetails;