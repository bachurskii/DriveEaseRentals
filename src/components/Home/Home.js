import styles from "./Home.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ourMissions from "../../img/our-missions.png";
import OurCars from "../../img/ourCars.png";
import ourServices from "../../img/ourServices.png";
import ourCommiments from "../../img/ourCommiments.png";
function Home() {
  return (
    <>
      <div className={styles.HomePageImage}>
        <Header />
        <h1 className={styles.title}>
          Comfort, style, freedom - rent the best
        </h1>
      </div>
      <section className={styles.about}>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Our mission</h2>
          <img src={ourMissions} alt="Our missions" className={styles.img} />
          <p className={styles.text}>
            At DriveEase, we strive to provide more than just car rentals, but
            to create a unique experience for each customer. Our goal is to
            provide comfort, style and freedom of choice through high-quality
            service and an excellent fleet of vehicles. We believe that
            traveling by car is not only about moving from point A to point B,
            but also an opportunity to experience new emotions and impressions.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Our Cars</h2>
          <img src={OurCars} alt="Our cars" className={styles.img} />
          <p className={styles.text}>
            We are proud of our extensive fleet of premium vehicles, which
            includes the latest models from the world's leading manufacturers.
            Our approach is to offer the perfect vehicle for every occasion -
            from sporty convertibles for romantic weekends to spacious SUVs for
            family adventures.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Our services</h2>
          <img src={ourServices} alt="Our services" className={styles.img} />
          <p className={styles.text}>
            DriveEase is a full-service vehicle that includes personal vehicle
            delivery to your location, flexible rental terms and 24/7 support.
            We also offer additional options such as GPS navigation, child car
            seats and customized insurance packages to make your trip as
            worry-free as possible.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Our Commitments</h2>
          <img
            src={ourCommiments}
            alt="Our Commiments"
            className={styles.img}
          />
          <p className={styles.text}>
            Our company is built on the principles of honesty, transparency and
            customer focus. We value the trust of our clients and strive to
            exceed their expectations at every stage of cooperation. At
            DriveEase you will find a reliable partner who will make your car
            rental experience easy and enjoyable.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
