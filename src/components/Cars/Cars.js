import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Cars.module.css";
function Cars() {
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
      </div>
      <Footer />
    </div>
  );
}

export default Cars;
