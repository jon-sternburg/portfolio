import styles from "../page.module.css";
import { FaFile } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer_frame}>
      <div className={styles.footer_inner}>
        <h3>Jon Sternburg</h3>
        <div className={styles.footer_buttons}>
          <a
            href={"jon_sternburg_resume.pdf"}
            className={styles.topbar_link}
            download
          >
            <FaFile className={styles.resume_icon} />
            <span>Resume</span>
          </a>
          <a
            href={"https://github.com/jon-sternburg"}
            className={styles.topbar_link}
            target="_blank"
          >
            <AiFillGithub className={styles.contact_icon} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
