import styles from "../page.module.css";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero_frame}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_title}>
          <HiMiniCodeBracketSquare className={styles.hero_icon} />

          <div className={styles.hero_right}>
            <h2>Jon Sternburg</h2>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div className={styles.tag_wrap_hero}>
          <div className={styles.react_tag}>React</div>
          <div className={styles.typescript_tag}>TypeScript</div>
          <div className={styles.node_tag}>Node.js</div>
          <div className={styles.next_tag}>Next.js</div>
          <div className={styles.docker_tag}>MongoDB</div>
          <div className={styles.gatsby_tag}>Gatsby</div>
          <div className={styles.hugo_tag}>Hugo</div>
        </div>
      </div>
    </section>
  );
}
