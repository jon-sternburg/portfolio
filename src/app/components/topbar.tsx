import React from "react";
import styles from "../page.module.css";
import { IoMdMail } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Topbar(): JSX.Element {
  return (
    <nav className={styles.top_bar_frame}>
      <div className={styles.top_bar_buttons}>
        <button aria-label="resume" type={"button"}>
          <FaFile className={styles.resume_icon} />
          <span>Resume</span>
        </button>
        <button aria-label="contact" type={"button"}>
          <IoMdMail className={styles.contact_icon} />
          <span>Contact</span>
        </button>
        <button aria-label="github" type={"button"}>
          <AiFillGithub className={styles.contact_icon} />
          <span>GitHub</span>
        </button>
      </div>
    </nav>
  );
}
