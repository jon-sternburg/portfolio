import styles from "./page.module.css";
import Topbar from "./components/topbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";

export default function App() {
  return (
    <main className={styles.main}>
      <Topbar />

      <section className={styles.content_frame}>
        <Hero />
        <Projects />

        {/* 
<About />
*/}

        <Footer />
      </section>
    </main>
  );
}
