import styles from "./page.module.css";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage/>
    </main>
  );
}