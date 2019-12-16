import React from 'react';
import RecipeList from './component/recipeList/RecipeList';
import  RecipeDetails from './component/recipeDetails/RecipeDetails'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  state = {
    recipes: [{
      id: 1,
      name: 'Paneer Butter Masala',
      img: 'paneer.jpg',
      ingredients: ['Tomatoes - 8',
       ' Paneer - 200 gm',
        'Coriander - 2 Tbsp {Chopped}',
       ' Onions - 3',
        'Butter - 3 Tbsp']
    },

    {
      id: 2,
      name: 'Garlic Naan',
      img: 'garlicnaan.jpg',
      ingredients: ['Flour - 2 Cups + More for dusting',
        'Warm Water - As required',
        'Yeast - ½ tbsp',
        'Sugar - 1 Tbsp',
       ' Salt - to taste']
    },

    {
      id: 3,
      name: 'Rasmalai',
      img: 'rasmalai.jpg',
      ingredients: ['3 litre full cream milk',
       ' 1 teaspoon rose water',
       ' 2 tablespoon almonds',
       ' 3 tablespoon lemon juice',
       ' 1 1/3 cup sugar']
    },

    {
      id: 4,
      name: 'Gobi Manchuri',
      img: 'gobhimanchuri.jpg',
      ingredients: ['10 baby corn (chopped)',
        '½ cup maida / plain flour / all-purpose flour',
       ' 2 tbsp corn flour',
       ' ½ tsp ginger-garlic paste',
      '  1 tsp kashmiri chilli powder']
    }
    ],
    click:false,
    childData:null
  }

  render() {
    
    return (
      
      <div>



<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={this.getDataFromChild} list={this.state.recipes}/>
          
        </div>
         <div class="col-md-5  offset-1 float-left">
           
           {this.state.click? <RecipeDetails  list1={this.state.gotData}/> :null}
          
        </div> 
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={this.getDataFromChild} list={this.state.recipes}/>
          
        </div>
         <div class="col-md-5  offset-1 float-left">
           
           {this.state.click? <RecipeDetails  list1={this.state.gotData}/> :null}
          
        </div> 
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={this.getDataFromChild} list={this.state.recipes}/>
          
        </div>
         <div class="col-md-5  offset-1 float-left">
           
           {this.state.click? <RecipeDetails  list1={this.state.gotData}/> :null}
          
        </div> 
  </div>
</div>



      
       {/*  <RecipeList data={this.getDataFromChild} /> */}
        
      </div>
    )
  }
  getDataFromChild = (childData) => {
    console.log('child data', childData)
    this.setState({
      click : true,
      gotData : childData
    })
   
    
}
}

export default App;
