import styles from "../styles/About.module.css";

function About() {
  return (
    <main className={styles.page}>

      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <a href="/">KAEAOU</a>
          <span>VISUAL ARTIST / ARCHIVE</span>
        </div>

        <div className={styles.navLinks}>
          <a href="/">CONCEPT</a>
          <a href="/">ILLUSTRATION</a>
          <a href="/sketches">SKETCHES</a>
          <a href="/about">ABOUT</a>
        </div>

        <div className={styles.navDetails}>
          <span>ARCHIVE / 2026</span>
          <span>KA / 01</span>
        </div>
      </nav>

      <section className={styles.about}>
        <div className={styles.aboutNumber}>04</div>

        <div className={styles.verticalLabel}>
          <span>PERSONAL ARCHIVE</span>
          <span>ABOUT / KAEAOU</span>
        </div>

        <div className={styles.aboutTop}>
          <span>ARCHIVE / PERSONAL RECORD</span>
          <span>1999 — 2026</span>
        </div>

        <div className={`${styles.registration} ${styles.registrationOne}`}>
          +
        </div>

        <div className={`${styles.registration} ${styles.registrationTwo}`}>
          +
        </div>

        <div className={styles.sideIndex}>
          <span>04</span>
          <span>/</span>
          <span>04</span>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutHeading}>
            <span className={styles.sectionIndex}>04 / 04</span>

            <h1>
              About
              <br />
              <em>Me</em>
            </h1>

            <div className={styles.headingLine}>
              <span />
              <i>✦</i>
              <span />
            </div>

            <div className={styles.headingMeta}>
              <span>VISUAL ARTIST</span>
              <span>KA / VISUAL STUDIES</span>
            </div>
          </div>

          <div className={styles.description}>
            <span className={styles.descriptionLabel}>
              ARTIST STATEMENT
            </span>

            <p className={styles.lead}>
              I'm KAEAOU, a visual artist and illustrator interested
              in concept art, character design, and visual
              storytelling.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo labore unde, officiis fuga sunt sequi quod alias. A ipsum, nisi dolorum explicabo vel quis ab sed obcaecati adipisci nemo saepe.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora pariatur magni quasi ipsum quo,
            </p>

            <div className={styles.descriptionMark}>
              <span>FIELD NOTE / 001</span>
              <i />
            </div>
          </div>
        </div>

        <div className={styles.archiveDetails}>
          <div>
            <span>NAME</span>
            <strong>KAEAOU</strong>
          </div>

          <div>
            <span>FIELD</span>
            <strong>VISUAL ART / ILLUSTRATION</strong>
          </div>

          <div>
            <span>ACTIVE</span>
            <strong>2021 — PRESENT</strong>
          </div>

          <div>
            <span>ARCHIVE</span>
            <strong>VOL. 01</strong>
          </div>
        </div>

        <div className={styles.decorativeText}>
          <span>KA / VISUAL STUDIES</span>
          <span>THE ARCHIVE CONTINUES →</span>
        </div>

        <div className={styles.coordinates}>
          <span>3°N</span>
          <span>102°E</span>
          <span>ENTRY 04</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMain}>

          <div>
            <span className={styles.footerEyebrow}>
              VISUAL ARTIST / ARCHIVE
            </span>

            <div className={styles.footerBrand}>KAEAOU</div>
          </div>
          <div className={styles.footerNavigation}>
            <span>SOCIAL / CONTACT</span>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              IG — INSTAGRAM
            </a>

            <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noreferrer"
            >
              TK — TIKTOK
            </a>

            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              X — ARCHIVE
            </a>

            <span style={{ marginTop: "8px" }}>
              OPEN / ONLINE
            </span>
          </div>

        </div>

        <div className={styles.footerRule} />

        <div className={styles.footerBottom}>
          <span>© 2026 KAEAOU</span>
          <span>PERSONAL ARCHIVE / VOL. 01</span>
          <span>CONCEPT · ILLUSTRATION · CHARACTER DESIGN</span>
        </div>
      </footer>
    </main>
  );
}

export default About;