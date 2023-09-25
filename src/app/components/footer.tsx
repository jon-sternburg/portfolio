import styles from "../page.module.css";
import { IoMdMail } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer_frame}>
      <div className={styles.footer_inner}>
        <h3>Jon Sternburg</h3>
        <div className={styles.footer_buttons}>
          <button type={"button"}>
            <FaFile className={styles.resume_icon} />
            <span>Resume</span>
          </button>
          <button type={"button"}>
            <IoMdMail className={styles.contact_icon} />
            <span>Contact</span>
          </button>
          <button type={"button"}>
            <AiFillGithub className={styles.contact_icon} />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
