import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import { useFavorites } from "../hooks/useFavorites";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Favorites() {
  const navigate = useNavigate();
  const { favorites, isFav, toggle } = useFavorites();

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h2 className="favorites__title">Favorites</h2>
        <span className="favorites__count">{favoriteCars.length} cars</span>
      </div>

      {favoriteCars.length === 0 ? (
        <div className="favorites__empty">
          <p>You have no favorite cars yet.</p>
          <Button onClick={() => navigate("/cars")}>Browse Cars</Button>
        </div>
      ) : (
        <div className="favorites__grid">
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFav={isFav(car.id)}
              onToggleFav={toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
