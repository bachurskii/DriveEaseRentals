import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../Cars/Cars.module.css";
import stylesFavorite from "./Favorite.module.css";
import vectorBlue from "../../img/vector-blue.png";
import vector from "../../img/vector.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/actions/favoritesActions";
import CarsDetails from "../CarsDetails/CarsDetails";

function Favorite() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoritesCars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const toggleFavorite = (car) => {
    const isFavorite = favorites.some(
      (favoritesCars) => favoritesCars.id === car.id
    );
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((elem) => elem.id !== car.id);
      dispatch(removeFavorite(car.id));
    } else {
      newFavorites = [...favorites, car];
      dispatch(addFavorite(car));
    }
    saveFavoritesLocal(newFavorites);
  };
  const handleLearnMore = (car) => {
    setSelectedCard(car);
    setIsModalOpen(true);
  };
  const saveFavoritesLocal = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const loadFavoritesLocal = () => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };
  return (
    <div>
      <Header />

      {favorites.length > 0 ? (
        <ul className={styles.containerInfo}>
          {favorites.map((car) => {
            const isFavorite = favorites.some(
              (favoriteCar) => favoriteCar.id === car.id
            );
            return (
              <li key={car.id} className={styles.list}>
                <img
                  className={styles.titleImg}
                  src={car.img}
                  alt={car.description}
                  width={274}
                  height={268}
                />
                <img
                  className={styles.icon}
                  src={isFavorite ? vectorBlue : vector}
                  alt="icon"
                  width={20}
                  height={20}
                  onClick={() => toggleFavorite(car)}
                />
                <div className={styles.mainSubcontainer}>
                  <div className={styles.subContainer}>
                    <span className={styles.leftSpan}>
                      {car.make} , {car.year}
                    </span>
                    <span>{car.rentalPrice}</span>
                  </div>
                  <div>
                    <p className={styles.textDesc}>
                      {car.address.split(", ").slice(1).join(", ")} |{" "}
                      {car.rentalCompany} | {car.type} | {car.model} | {car.id}
                      {/* {car.accessories} */}
                    </p>
                  </div>
                  <button
                    className={styles.btnImg}
                    onClick={() => handleLearnMore(car)}
                  >
                    Learn more
                  </button>
                </div>
              </li>
            );
          })}
          <CarsDetails
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            car={selectedCard}
          />
        </ul>
      ) : (
        <p className={stylesFavorite.noFavoritest}>
          You have no favorite cars yet.
        </p>
      )}
      <Footer />
    </div>
  );
}

export default Favorite;
