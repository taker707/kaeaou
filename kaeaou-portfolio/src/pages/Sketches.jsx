import { useEffect, useState } from "react";

import ske1 from "../assets/sketches/ske1.jpg";
import ske2 from "../assets/sketches/ske2.jpg";
import ske3 from "../assets/sketches/ske3.jpg";
import ske4 from "../assets/sketches/ske4.jpg";
import ske5 from "../assets/sketches/ske5.jpg";
import ske6 from "../assets/sketches/ske6.jpg";
import ske7 from "../assets/sketches/ske7.jpg";
import ske8 from "../assets/sketches/ske8.jpg";
import ske9 from "../assets/sketches/ske9.jpg";
import ske10 from "../assets/sketches/ske10.jpg";
import ske11 from "../assets/sketches/ske11.jpg";
import ske12 from "../assets/sketches/ske12.jpg";
import ske13 from "../assets/sketches/ske13.jpg";
import ske14 from "../assets/sketches/ske14.jpg";
import ske15 from "../assets/sketches/ske15.jpg";
import ske16 from "../assets/sketches/ske16.jpg";
import ske17 from "../assets/sketches/ske17.jpg";
import ske18 from "../assets/sketches/ske18.jpg";
import ske19 from "../assets/sketches/ske19.jpg";
import ske20 from "../assets/sketches/ske20.jpg";
import ske21 from "../assets/sketches/ske21.jpg";
import ske22 from "../assets/sketches/ske22.jpg";
import ske23 from "../assets/sketches/ske23.png";
import ske24 from "../assets/sketches/ske24.jpg";
import ske25 from "../assets/sketches/ske25.jpg";
import ske26 from "../assets/sketches/ske26.jpg";
import ske27 from "../assets/sketches/ske27.jpg";
import ske28 from "../assets/sketches/ske28.jpg";
import ske29 from "../assets/sketches/ske29.jpg";
import ske30 from "../assets/sketches/ske30.jpg";
import ske31 from "../assets/sketches/ske31.jpg";

import styles from "../styles/Sketches.module.css";

function Sketches() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sketches = [
    ske1,
    ske2,
    ske3,
    ske4,
    ske5,
    ske6,
    ske7,
    ske8,
    ske9,
    ske10,
    ske11,
    ske12,
    ske13,
    ske14,
    ske15,
    ske16,
    ske17,
    ske18,
    ske19,
    ske20,
    ske21,
    ske22,
    ske23,
    ske24,
    ske25,
    ske26,
    ske27,
    ske28,
    ske29,
    ske30,
    ske31,
  ];

  const rotations = [
    "-2deg",
    "2deg",
    "-1deg",
    "3deg",
    "-3deg",
    "1deg",
    "-2deg",
    "3deg",
    "-1deg",
    "2deg",
    "-3deg",
    "1deg",
    "-2deg",
    "2deg",
    "-1deg",
    "3deg",
    "-3deg",
    "1deg",
    "-2deg",
    "2deg",
    "-1deg",
    "3deg",
    "-3deg",
    "1deg",
    "-2deg",
    "2deg",
    "-1deg",
    "3deg",
    "-3deg",
    "1deg",
    "-2deg",
  ];

  const openLightbox = (image, index) => {
    setLightboxImage({
      image,
      index,
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const showPrevious = (e) => {
    e.stopPropagation();

    setLightboxImage((current) => {
      if (!current) return null;

      const previousIndex =
        current.index === 0
          ? sketches.length - 1
          : current.index - 1;

      return {
        image: sketches[previousIndex],
        index: previousIndex,
      };
    });
  };

  const showNext = (e) => {
    e.stopPropagation();

    setLightboxImage((current) => {
      if (!current) return null;

      const nextIndex =
        current.index === sketches.length - 1
          ? 0
          : current.index + 1;

      return {
        image: sketches[nextIndex],
        index: nextIndex,
      };
    });
  };

  /*
   * MOBILE MENU + LIGHTBOX SCROLL LOCK
   *
   * Uses position: fixed instead of only overflow:hidden.
   * This prevents iOS Safari and other mobile browsers from
   * continuing to scroll the page behind the open menu.
   */
  useEffect(() => {
    const shouldLockScroll = menuOpen || lightboxImage;

    if (!shouldLockScroll) {
      return;
    }

    const scrollY = window.scrollY;

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;

    const originalHtmlOverflow =
      document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow =
        originalHtmlOverflow;

      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;

      window.scrollTo(0, scrollY);
    };
  }, [menuOpen, lightboxImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxImage) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        setLightboxImage((current) => {
          if (!current) return null;

          const previousIndex =
            current.index === 0
              ? sketches.length - 1
              : current.index - 1;

          return {
            image: sketches[previousIndex],
            index: previousIndex,
          };
        });
      }

      if (event.key === "ArrowRight") {
        setLightboxImage((current) => {
          if (!current) return null;

          const nextIndex =
            current.index === sketches.length - 1
              ? 0
              : current.index + 1;

          return {
            image: sketches[nextIndex],
            index: nextIndex,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  /*
   * SCROLL REVEALS
   */
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      [
        `.${styles.archiveIntro}`,
        `.${styles.archiveHeader}`,
        `.${styles.card}`,
        `.${styles.footer}`,
      ].join(",")
    );

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealElements.forEach((element) => {
      element.classList.add(styles.reveal);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          KAEAOU
        </a>

        <div className={styles.navCenter}>
          <span className={styles.navSlash}>//</span>
          <span>SKETCH ARCHIVE</span>
        </div>

        <div className={styles.navLinks}>
          <a href="/">HOME</a>
          <a href="/brochure">BROCHURE</a>
          <a href="/artbook">ARTBOOK</a>
          <a href="/moribloom">MORIBLOOM</a>
          <a href="/about">ABOUT</a>
        </div>

        <button
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuLabel}>
              KAEAOU / NAV
            </span>

            <span className={styles.mobileMenuNumber}>
              002
            </span>
          </div>

          <div className={styles.mobileMenuLine} />

          <div className={styles.mobileMenuLinks}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              <span>01</span>
              <strong>HOME</strong>
            </a>

            <a
              href="/brochure"
              onClick={() => setMenuOpen(false)}
            >
              <span>02</span>
              <strong>BROCHURE</strong>
            </a>

            <a
              href="/artbook"
              onClick={() => setMenuOpen(false)}
            >
              <span>03</span>
              <strong>ARTBOOK</strong>
            </a>

            <a
              href="/moribloom"
              onClick={() => setMenuOpen(false)}
            >
              <span>04</span>
              <strong>MORIBLOOM</strong>
            </a>

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              <span>05</span>
              <strong>ABOUT</strong>
            </a>
          </div>

          <div className={styles.mobileMenuBottom}>
            <span>SKETCH ARCHIVE</span>
            <span>VISUAL RECORD / 2026</span>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroSlashOne} />
        <div className={styles.heroSlashTwo} />

        <div className={styles.heroTop}>
          <span>PERSONAL ARCHIVE</span>
          <span>NO. 002</span>
        </div>

        <div className={styles.heroMain}>
          <div className={styles.heroLabel}>
            <span className={styles.redDot} />
            VISUAL RECORD / 2026
          </div>

          <h1 className={styles.heroTitle}>
            <span>SKETCH</span>
            <span className={styles.outlineText}>ARCHIVE</span>
          </h1>

          <div className={styles.heroInfo}>
            <div className={styles.heroNumber}>31</div>

            <div className={styles.heroDescription}>
              <span>FILES COLLECTED</span>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className={styles.heroSideText}>
          DRAW
          <br />
          OBSERVE
          <br />
          REPEAT
        </div>
      </header>

      <section className={styles.archiveIntro}>
        <div className={styles.introStamp}>
          <span>PRIVATE</span>
          <strong>ARCHIVE</strong>
        </div>

        <div className={styles.introText}>
          <span>001 — 031</span>
        </div>

        <div className={styles.introMeta}>
          <span>KAEAOU</span>
          <span>SKETCHBOOK MATERIAL</span>
          <span>2026</span>
        </div>
      </section>

      <main className={styles.archive}>
        <div className={styles.archiveHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              FILE DIRECTORY
            </span>

            <h2>
              THE
              <br />
              <span>SKETCHES.</span>
            </h2>
          </div>

          <div className={styles.archiveHeaderRight}>
            <div className={styles.redBlock}>31</div>

            <div>
              <span>DOCUMENTS</span>
              <span>UNFINISHED / PERSONAL</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {sketches.map((image, index) => (
            <button
              key={index}
              className={styles.card}
              style={{
                "--rotation": rotations[index],
              }}
              onClick={() => openLightbox(image, index)}
              aria-label={`Open sketch ${index + 1}`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <span>
                    FILE_{String(index + 1).padStart(3, "0")}
                  </span>

                  <span>KA / 26</span>
                </div>

                <div className={styles.imageWrap}>
                  <img
                    src={image}
                    alt={`Sketch ${index + 1}`}
                    loading="lazy"
                  />

                  <div className={styles.imageTint} />

                  <div className={styles.cardCross}>+</div>
                </div>

                <div className={styles.cardBottom}>
                  <span>
                    STUDY {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>VIEW →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* DESKTOP FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerDiagonal} />

        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            KAEAOU<span>®</span>
          </div>

          <div className={styles.footerColumns}>
            <div className={styles.footerLinks}>
              <span>NAVIGATE</span>

              <a href="/">HOME</a>
              <a href="/moribloom">MORIBLOOM</a>
              <a href="/artbook">ARTBOOK</a>
              <a href="/brochure">BROCHURE</a>
              <a href="/about">ABOUT</a>
            </div>

            <div className={styles.footerLinks}>
              <span>CONNECT</span>

              <a href="https://instagram.com/kaeaou" target="_blank">INSTAGRAM ↗</a>
              <a href="https://tiktok.com/kaeaouu" target="_blank">TIKTOK ↗</a>
              <a href="https://x.com/kaeaouu" target="_blank">X ↗</a>
              <a href="https://vgen.co/kaeaou" target="_blank">VGEN ↗</a>
              <a href="https://artstation.com/kaeaou" target="_blank">ARTSTATION ↗</a>
            </div>
          </div>

          <div className={styles.footerNumber}>031</div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 KAEAOU</span>
          <span>SKETCH ARCHIVE / 002</span>
          <span>END_</span>
        </div>
      </footer>

      {/* NON-DESKTOP FOOTER */}
      <footer className={styles.mobileFooter}>
        <div className={styles.mobileFooterSlash} />

        <div className={styles.mobileFooterTop}>
          <div className={styles.mobileFooterEyebrow}>
            <span className={styles.mobileFooterDot} />
            PERSONAL ARCHIVE / 002
          </div>

          <div className={styles.mobileFooterBrand}>
            KAEAOU<span>®</span>
          </div>

          <p className={styles.mobileFooterStatement}>
            DRAW.
            <br />
            OBSERVE.
            <br />
            REPEAT.
          </p>
        </div>

        <div className={styles.mobileFooterDivider} />

        <div className={styles.mobileFooterNav}>
          <span className={styles.mobileFooterSectionTitle}>
            NAVIGATE
          </span>

          <a href="/">
            <span>01</span>
            <strong>INSTAGRAM</strong>
          </a>
          <a href="/">
            <span>02</span>
            <strong>TIKTOK</strong>
          </a>
          <a href="/">
            <span>03</span>
            <strong>X</strong>
          </a>

        </div>

        <div className={styles.mobileFooterDivider} />

        <div className={styles.mobileFooterMeta}>
          <div>
            <span>ARCHIVE</span>
            <strong>SKETCH / 002</strong>
          </div>

          <div>
            <span>FILES</span>
            <strong>031</strong>
          </div>

          <div>
            <span>YEAR</span>
            <strong>2026</strong>
          </div>
        </div>

        <div className={styles.mobileFooterBottom}>
          <span>© 2026 KAEAOU</span>
          <span>END_</span>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.lightboxTop}>
            <span>
              FILE_
              {String(lightboxImage.index + 1).padStart(3, "0")}
            </span>

            <button
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ×
            </button>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={showPrevious}
            aria-label="Previous sketch"
          >
            ←
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image}
              alt={`Sketch ${lightboxImage.index + 1}`}
              className={styles.lightboxImage}
            />
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={showNext}
            aria-label="Next sketch"
          >
            →
          </button>

          <div className={styles.lightboxBottom}>
            <span>
              {String(lightboxImage.index + 1).padStart(3, "0")} / 031
            </span>

            <span>← → NAVIGATE · ESC CLOSE</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sketches;