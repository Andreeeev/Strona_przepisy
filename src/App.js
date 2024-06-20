import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import RecipesList from './RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  return (
    <div className="App">
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
