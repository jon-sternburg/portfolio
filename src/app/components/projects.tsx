"use client";
import styles from "../page.module.css";

export default function Projects(): JSX.Element {
  return (
    <section className={styles.content_item_frame}>
      <div className={styles.projects_content_wrap}>
        <article className={styles.project_content}>
          <div className={styles.top}>
            <header>
              <h3>Gutenberg Reader</h3>
              <div className={styles.link_wrap}>
                <a
                  href={"https://reader-brown.vercel.app/"}
                  className={styles.live_link}
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href={"https://github.com/jon-sternburg/reader"}
                  className={styles.source_link}
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </header>
          </div>

          <div className={styles.middle}>
            <div className={styles.img_wrap}>
              <img
                alt="reader site image"
                className={"slide"}
                src={"./images/reader1.png"}
              />
            </div>
            <div className={styles.text_wrap}>
              <p>
                An ePub reader built for the Project Gutenberg free library of
                eBooks - allows users to read, annotate, highlight, and search
                hundreds of classic literature texts.
              </p>

              <p>
                Users can create an account to save, edit, and view their
                annotations from any device. Users can also save annotations
                locally.
              </p>
              <div className={styles.tag_wrap}>
                <div className={styles.react_tag}>React</div>
                <div className={styles.typescript_tag}>TypeScript</div>
                <div className={styles.next_tag}>Next.js</div>
                <div className={styles.epub_tag}>Epub.js</div>
                <div className={styles.epub_tag}>MongoDB</div>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.project_content}>
          <div className={styles.top}>
            <header>
              <h3>Reddit Clone</h3>
              <div className={styles.link_wrap}>
                <a
                  href={"https://reddit-clone-seven-pi.vercel.app/"}
                  className={styles.live_link}
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href={"https://github.com/jon-sternburg/reddit_clone"}
                  className={styles.source_link}
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </header>
          </div>
          <div className={styles.middle}>
            <div className={styles.img_wrap}>
              <img alt="reddit clone site image" src={"./images/reddit1.png"} />
            </div>
            <div className={styles.text_wrap}>
              <p>
                A fully functional Reddit clone - features content sort,
                subreddit/user pages, dynamic search, and comment threads.
              </p>
              <div className={styles.tag_wrap}>
                <div className={styles.react_tag}>React</div>
                <div className={styles.typescript_tag}>TypeScript</div>
                <div className={styles.next_tag}>Next.js</div>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.project_content}>
          <div className={styles.top}>
            <header>
              <h3>Portfolio Site</h3>
              <div className={styles.link_wrap}>
                <a
                  href={"https://portfolio-jon-sternburg.vercel.app/"}
                  className={styles.live_link}
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href={"https://github.com/jon-sternburg/portfolio"}
                  className={styles.source_link}
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </header>
          </div>
          <div className={styles.middle}>
            <div className={styles.img_wrap}>
              <img alt="portfolio site image" src={"./images/portfolio1.png"} />
            </div>
            <div className={styles.text_wrap}>
              <p>A simple static site built with Next.js.</p>
              <div className={styles.tag_wrap}>
                <div className={styles.react_tag}>React</div>
                <div className={styles.typescript_tag}>TypeScript</div>
                <div className={styles.next_tag}>Next.js</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
