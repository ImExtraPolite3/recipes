import Lasagna from './Lasagna';
import Pizza from './Pizza';
import './style.css';

function showLasagna() {
  const recipes = document.querySelectorAll('.recipes');

  recipes.forEach((recipe) => {
    if (recipe.id == 'lasagna') {
      recipe.classList.remove('hide');
    } else {
      recipe.classList.add('hide');
    }
  });
}

function showPizza() {
  const recipes = document.querySelectorAll('.recipes');

  recipes.forEach((recipe) => {
    if (recipe.id == 'pizza') {
      recipe.classList.remove('hide');
    } else {
      recipe.classList.add('hide');
    }
  });
}

function App() {
  return (
    <>
      <div id="main" className="recipes">
        <h1>Odin Recipes</h1>

        <button className="show-lasagna" onClick={showLasagna}>
          Show lasagna recipe
        </button>
        <br />
        <button className="show-pizza" onClick={showPizza}>
          Show pizza recipe
        </button>
      </div>
      <Lasagna />
      <Pizza />
    </>
  );
}

export default App;
