import React, { useState } from 'react';
import RecipeList from './component/recipeList/RecipeList';
import RecipeDetails from './component/recipeDetails/RecipeDetails'
import './App.css';
import Nav from './component/nav/Nav';
import { UserProvider } from './context/UserContext';


export default function App() {

  const recipes = [{
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
  },

  ]

  const login={
    login: true,
    setLog: (value)=>{
console.log(value)
change(value);
    }
  }

  const change = (value) => {
    setUserLogin({
      ...userLogin,
      login: value
    })
  }

  const [recipe, setRecipies] = useState(recipes)
  const [click, setClick] = useState('')
  const [childData, setChildData] = useState([])
  

  const [userLogin , setUserLogin] = useState(login)

  const getDataFromChild = (childData) => {
    console.log('child data', childData)
    setChildData(
      ...recipe,
      childData

    )
    setClick(
      1
    )

  }


  return (
    
    <>
    <UserProvider value={userLogin}>
    <Nav  />
    </UserProvider>
 
      <div>

        <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={getDataFromChild} list={recipe} />

        </div>
        <div class="col-md-5  offset-1 float-left">

          {click ? <RecipeDetails list1={childData} /> : null}

        </div>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={getDataFromChild} list={recipe} />

        </div>
        <div class="col-md-5  offset-1 float-left">

          {click ? <RecipeDetails list1={childData} /> : null}

        </div>
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div class="col-md-3  offset-1 float-left ">
          <RecipeList data={getDataFromChild} list={recipe} />

        </div>
        <div class="col-md-5  offset-1 float-left">
          {console.log('sending to display', click)}
          {click ? <RecipeDetails list1={childData} /> : 'wrong'}

        </div>
      </div>

    </>
  )
}


