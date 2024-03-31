import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CarsDetails from "../CarsDetails";
import vectorBlue from "../../img/vector-blue.png";
import vector from "../../img/vector.png";
import styles from "./Cars.module.css";
import {
  addFavorite,
  removeFavorite,
  setFavorites,
} from "../../redux/actions/favoritesActions";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedAction,
  selectedPriceAction,
} from "../../redux/actions/filterActions";
import carsBrands from "../../data/makes.json";
import priceRanges from "../../data/priceRanges.json";
function Cars() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [limit, setLimit] = useState(12);
  const [more, setMore] = useState(true);
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();
  const selectedCarBrand = useSelector((state) => state.carBrand.selectedBrand);
  const selectedPriceRange = useSelector(
    (state) => state.carBrand.selectedPriceRange
  );
  const favorites = useSelector((state) => state.favorites.favoritesCars);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://65a5641152f07a8b4a3f006e.mockapi.io/api/advert?page=1&limit=${limit}`
      );

      setCars(response.data);
      if (response.data.length < limit) {
        setMore(false);
      }
    } catch (error) {
      console.log("Bad request", error);
    }
  };

  useEffect(() => {
    const storedFavorites = loadFavoritesLocal();
    dispatch(setFavorites(storedFavorites));
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    setLimit((currentLimit) => currentLimit + 12);
  };
  useEffect(() => {
    fetchData();
  }, [limit]);
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
  const handleChange = (e) => {
    dispatch(selectedAction(e.target.value));
  };
  const handlePriceChange = (e) => {
    dispatch(selectedPriceAction(e.target.value));
  };
  return (
    <div>
      <Header />
      <div className={styles.searchContainer}>
        <form className={styles.searchForm}>
          <div className={styles.inputContainer}>
            <label htmlFor="carBrand" className={styles.hiddenLabelCar}>
              <p className={styles.textCars}>Cars brend</p>
            </label>
            <select
              onChange={handleChange}
              value={selectedCarBrand}
              id="carBrand"
              className={styles.selectCarBrand}
            >
              <option value="">Enter the text</option>
              {carsBrands.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="priceRange" className={styles.hiddenLabelPrice}>
              <p className={styles.textCars}>Price / 1 hour</p>
            </label>
            <select
              onChange={handlePriceChange}
              value={selectedPriceRange}
              id="priceRange"
              className={styles.selectPrice}
            >
              <option value="">To $</option>
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputContainerMilage}>
            <p className={styles.textCars}>Car mileage/km</p>
            <input
              type="text"
              id="mileageFrom"
              placeholder="From"
              className={styles.inputLeft}
            />
            <input
              type="text"
              id="mileageTo"
              placeholder="To"
              className={styles.inputRight}
            />
          </div>

          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
        <div>
          <ul className={styles.containerInfo}>
            {cars
              .filter(
                (car) => selectedCarBrand == "" || car.make === selectedCarBrand
              )
              .filter(
                (car) =>
                  selectedPriceRange == "" ||
                  car.rentalPrice === selectedPriceRange
              )
              .map((car) => {
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
                          {car.rentalCompany} | {car.type} | {car.model} |{" "}
                          {car.id}
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
          <div className={styles.addMore}>
            {more && (
              <button className={styles.btnAddMore} onClick={loadMore}>
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cars;
