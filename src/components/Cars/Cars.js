import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Cars.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Cars() {
  const [limit, setLimit] = useState(12);
  const [more, setMore] = useState(true);
  const [cars, setCars] = useState([]);
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
    console.log(cars);
  }, [cars]);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(cars);
  }, [cars]);
  const loadMore = () => {
    setLimit((currentLimit) => currentLimit + 12);
  };
  useEffect(() => {
    fetchData();
  }, [limit]);
  return (
    <div>
      <Header />
      <div className={styles.searchContainer}>
        <form className={styles.searchForm}>
          <div className={styles.inputContainer}>
            <label htmlFor="carBrand" className={styles.hiddenLabelCar}>
              <p className={styles.textCars}>Cars brend</p>
            </label>
            <select id="carBrand" className={styles.selectCarBrand}>
              <option>Enter the text</option>
            </select>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="priceRange" className={styles.hiddenLabelPrice}>
              <p className={styles.textCars}>Price / 1 hour</p>
            </label>
            <select id="priceRange" className={styles.selectPrice}>
              <option>To $</option>
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
            {cars.map((car) => (
              <li className={styles.list}>
                <img
                  className={styles.titleImg}
                  src={car.img}
                  alt={car.description}
                  width={274}
                  height={268}
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
                  <button className={styles.btnImg}>Learn more</button>
                </div>
              </li>
            ))}
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
