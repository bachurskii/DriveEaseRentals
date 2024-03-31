import { useEffect } from "react";
import styles from "./CarsDetails.module.css";

const CarsDetails = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  if (!isOpen) return null;

  const stopPropogation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalBackground} onClick={stopPropogation}>
        <div className={styles.closeIcon} onClick={onClose}>
          <img onClick={onClose} src="/img/x.png" alt="close" />
        </div>
        <div className={styles.container} onClick={stopPropogation}>
          <div className={styles.imgDetails}>
            <img
              className={styles.titleImg}
              src={car.img}
              alt={car.description}
              width={461}
              height={248}
            />
          </div>
          <div className={styles.firstDescr}>
            {car?.make} {car?.model} {car?.year}
          </div>
          <div className={styles.containerDesc}>
            <p className={styles.textDesc}>
              {car.address.split(", ").slice(1).join(", ")} |{" "}
              {car.rentalCompany} | Type:{car.type} | {car.model} | id:{car.id}{" "}
              | Year:{car.year} | Fuel consumtion:{car.fuelConsumption} | Engine
              Size:{car.engineSize}
              {/* {car.accessories} */}
            </p>
          </div>
          <p className={styles.text}>{car.description}</p>
          <p className={styles.textAccesories}>
            Accessories and functionalities:
          </p>
          <p className={styles.textDesc}>
            {car.accessories.join(" | ")} | {car.functionalities.join(" | ")}
          </p>
          <p className={styles.rentalCond}>Rental Conditions:</p>
          <div className={styles.rentalConditions}>
            {car.rentalConditions.split("\n").map((condition, index) => (
              <div className={styles.elemConditions} key={index}>
                <span>{condition}</span>
              </div>
            ))}
            <div className={styles.elemConditions}>Mileage:{car.mileage}</div>
            <div className={styles.elemConditions}>Price:{car.rentalPrice}</div>
          </div>
          <button
            className={styles.btnRental}
            onClick={() => (window.location.href = "tel:+380730000000")}
          >
            Rental Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
