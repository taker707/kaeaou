import { useState } from "react";
import styles from "../styles/About.module.css";

function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className={styles.page}>

      {/* Desktop Navbar – hidden on mobile/tablet via CSS */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <a href="/">KAEAOU</a>
          <span>VISUAL ARTIST / ARCHIVE</span>
        </div>

        <div className={styles.navLinks}>
          <a href="/">HOME</a>
          <a href="/moribloom">MORIBLOOM</a>
          <a href="/artbook">ARTBOOK</a>
          <a href="/brochure">BROCHURE</a>
          <a href="/sketches">SKETCHES</a>
        </div>

        <div className={styles.navDetails}>
          <span>ARCHIVE / 2026</span>
          <span>KA / 01</span>
        </div>
      </nav>

      {/* Sidebar Toggle Button – shown on any screen < desktop */}
      <button
        className={`${styles.sidebarToggle} ${sidebarOpen ? styles.sidebarToggleOpen : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={sidebarOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay – closes sidebar when clicking outside */}
      {sidebarOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Custom Sidebar – slides in from the right on screens < desktop */}
      <aside className={`${styles.mobileSidebar} ${sidebarOpen ? styles.mobileSidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarBrand}>
            <a href="/">KAEAOU</a>
            <span>VISUAL ARTIST / ARCHIVE</span>
          </div>

          <button
            className={styles.sidebarClose}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          <a href="/">HOME</a>
          <a href="/moribloom">MORIBLOOM</a>
          <a href="/artbook">ARTBOOK</a>
          <a href="/brochure">BROCHURE</a>
          <a href="/sketches">SKETCHES</a>
        </nav>

        <div className={styles.sidebarDetails}>
          <span>ARCHIVE / 2026</span>
          <span>KA / 01</span>
        </div>
      </aside>

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
              I’m Kae! An illustrator who loves cute characters, bright colors, and bringing fun ideas to life.
            </p>

            <p>
              I enjoy experimenting with different styles and turning random ideas into something I can share with others.
            </p>

            <p>
              Currently, I'm still learning and finding my own style as I grow as an artist.
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

          <div className={styles.footerBrandBlock}>
            <span className={styles.footerEyebrow}>
              VISUAL ARTIST / ARCHIVE
            </span>
            <div className={styles.footerBrand}>KAEAOU</div>
          </div>

          {/* Social links – full names, all on one row, flush together */}
          <div className={styles.footerNavigation}>
            <span>SOCIAL / CONTACT</span>

            <div className={styles.footerLinks}>
              <a
                href="https://www.instagram.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                IG — INSTAGRAM
              </a>

              <a
                href="https://www.tiktok.com/@kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                TK — TIKTOK
              </a>

              <a
                href="https://x.com/kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                X — TWITTER
              </a>

              <a
                href="https://vgen.co/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                VG — VGEN
              </a>

              <a
                href="https://www.artstation.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                AS — ARTSTATION
              </a>
            </div>

            <span className={styles.footerOpen}>
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