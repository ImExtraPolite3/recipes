import lasagna from './assets/lasagna.webp';

function getIngredients() {
  const ingredients = [
    'Meat',
    'Onion and Garlic',
    'Tomato Product',
    'Sugar',
    'Spices and Seasonings',
    'Lasagna Noodles',
    'Cheeses',
    'Egg',
  ];

  const each_ingredient = ingredients.map((each) => <li key={each}>{each}</li>);

  return each_ingredient;
}

function getSteps() {
  const steps = [
    'Make the meat sauce.',
    'Cook the noodles.',
    'Make the ricotta mixture.',
    'Layer the lasagna.',
    'Cover with foil and bake.',
    'Let the lasagna rest before serving.',
  ];

  const each_step = steps.map((each) => <li>{each}</li>);

  return each_step;
}

export default function Lasagna() {
  return (
    <div className="hide">
      <h1>Lasagna Recipe</h1>
      <img src={lasagna} alt="lasagna" width="500px" />
      <h2>Description</h2>
      <p>
        Lasagna, a beloved Italian dish, is a culinary masterpiece that
        tantalizes the taste buds with its layers of flavors and textures. At
        its core, lasagna is a hearty casserole-like dish composed of
        alternating layers of wide, flat pasta sheets, rich meat or vegetable
        sauce, creamy sauce, and a generous sprinkling of cheese.
      </p>
      <h2>Ingredients</h2>
      <ul>{getIngredients()}</ul>
      <h2>Steps</h2>
      <ul>{getSteps()}</ul>
    </div>
  );
}
