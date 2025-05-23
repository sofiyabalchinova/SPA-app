import { CategoryItem } from "./categoryitem";

function CategoryList({ catalog = [] }) {
  return (
    <>
      {catalog.length > 0 ? (
        <div className="list">
          {catalog.map((el) => (
            <CategoryItem key={el.idCategory} {...el} />
          ))}
        </div>
      ) : (
        <img
          src="https://sun9-33.userapi.com/impf/EvmlV13Yxg9m3pbsuNBs7pC7YAV-VI34Uiq_nA/7NBKByK0IAw.jpg?size=1818x606&quality=95&crop=0,66,800,266&sign=e3a22462744d5a10e3fe9c0f2bdc9676&type=cover_group"
          alt="Not Found"
          className="fullscreen-img"
        />
      )}
    </>
  );
}

export { CategoryList };
