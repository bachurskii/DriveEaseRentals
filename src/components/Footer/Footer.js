import styles from "./Footer.module.css";
function Footer() {
  const randomPhone =
    "+380" + Math.floor(Math.random() * 900000000 + 100000000);
  const randomEmail = `contact${Math.floor(Math.random() * 1000)}@driveease.ua`;
  const locations = ["Kyiv", "Kharkov", "Odessa", "Lviv", "Dnepr"];
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src="/img/logo.png" alt="Logo" className={styles.footerLogo} />
        <div className={styles.footerLinks}>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com/Bachurskii_n1">Twitter</a>
          <a href="https://instagram.com/bachurskii_n1">Instagram</a>
          <a href="https://linkedin.com/in/george-bachurskii-0915ab282">
            Linkedin
          </a>
          <a href="https://github.com/bachurskii">Git Hub</a>
        </div>
        <div className={styles.footerBottom}>
          <p>Phone: {randomPhone}</p>
          <p>Email: {randomEmail}</p>
          <p>Location: {randomLocation}, Ukraine</p>
          <p>© 2023 DriveEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
