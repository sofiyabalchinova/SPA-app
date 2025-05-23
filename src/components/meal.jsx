import { Link } from "react-router-dom";

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="row">
      <div className="col s5">
        <div className="card">
          <div className="card-image">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div className="card-content">
            <span className="card-title">{strMeal}</span>
          </div>
          <div className="card-action">
            <Link to={`/meal/${idMeal}`} className="btn orange darken-4">
              Watch recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Meal };
