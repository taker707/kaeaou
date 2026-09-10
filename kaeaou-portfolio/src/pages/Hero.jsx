import { useEffect, useState } from "react";

import heroImage from "../assets/hero/hero.jpg";

import BCD10 from "../assets/moribloomConcept/BCD10.jpg";
import brochure from "../assets/brochureConcept/brochure.jpg";
import artbook from "../assets/artbookConcept/artbook.jpg";

import illus1 from "../assets/illustration/illus1.jpg";
import illus2 from "../assets/illustration/illus2.jpg";
// import illus3 from "../assets/illustration/illus3.jpg";
import illus4 from "../assets/illustration/illus4.jpg";
import illus5 from "../assets/illustration/illus5.jpg";
import illus6 from "../assets/illustration/illus6.jpg";
import illus7 from "../assets/illustration/illus7.jpg";
import illus8 from "../assets/illustration/illus8.jpg";
import illus9 from "../assets/illustration/illus9.jpg";
import illus10 from "../assets/illustration/illus10.jpg";
import illus11 from "../assets/illustration/illus11.jpg";
import illus12 from "../assets/illustration/illus12.jpg";
import illus13 from "../assets/illustration/illus13.jpg";
import illus14 from "../assets/illustration/illus14.jpg";
// import illus15 from "../assets/illustration/illus15.jpg";
import illus17 from "../assets/illustration/illus17.jpg";
// import illus18 from "../assets/illustration/illus18.jpg";
import illus19 from "../assets/illustration/illus19.jpg";
import illus20 from "../assets/illustration/illus20.jpg";
import illus21 from "../assets/illustration/illus21.jpg";
import illus22 from "../assets/illustration/illus22.jpg";
import illus23 from "../assets/illustration/illus23.jpg";
import illus24 from "../assets/illustration/illus24.jpg";
import illus25 from "../assets/illustration/illus25.jpg";
import illus26 from "../assets/illustration/illus26.jpg";
import illus27 from "../assets/illustration/illus27.jpg";
import illus28 from "../assets/illustration/illus28.png";
import illus29 from "../assets/illustration/illus29.jpg";
import illus30 from "../assets/illustration/illus30.jpg";
import illus31 from "../assets/illustration/illus31.jpg";

import styles from "../styles/Hero.module.css";

function Hero() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*
   * ---------------------------------------------------------
   * ILLUSTRATIONS
   * ---------------------------------------------------------
   */

  const illustrationItems = [
    {
      id: 1,
      image: illus1,
      rotate: "-3deg",
      translateX: "-4px",
      translateY: "4px",
      scale: "1",
    },
    {
      id: 2,
      image: illus28,
      rotate: "2deg",
      translateX: "8px",
      translateY: "-5px",
      scale: "1.03",
    },
    {
      id: 3,
      image: illus17,
      rotate: "4deg",
      translateX: "-8px",
      translateY: "5px",
      scale: "1.02",
    },
    {
      id: 4,
      image: illus5,
      rotate: "-4deg",
      translateX: "6px",
      translateY: "7px",
      scale: "1.04",
    },
    {
      id: 5,
      image: illus6,
      rotate: "2deg",
      translateX: "-5px",
      translateY: "-6px",
      scale: "0.96",
    },
    {
      id: 6,
      image: illus7,
      rotate: "-5deg",
      translateX: "10px",
      translateY: "-2px",
      scale: "1.06",
    },
    {
      id: 7,
      image: illus29,
      rotate: "1deg",
      translateX: "-6px",
      translateY: "-3px",
      scale: "1.02",
    },
    {
      id: 8,
      image: illus30,
      rotate: "-3deg",
      translateX: "7px",
      translateY: "5px",
      scale: "1.01",
    },
    {
      id: 9,
      image: illus31,
      rotate: "2deg",
      translateX: "-4px",
      translateY: "-7px",
      scale: "1.03",
    },
    {
      id: 10,
      image: illus9,
      rotate: "3deg",
      translateX: "-7px",
      translateY: "6px",
      scale: "1",
    },
    {
      id: 11,
      image: illus10,
      rotate: "-2deg",
      translateX: "5px",
      translateY: "-5px",
      scale: "1.04",
    },
    {
      id: 12,
      image: illus8,
      rotate: "5deg",
      translateX: "-10px",
      translateY: "4px",
      scale: "0.98",
    },
    {
      id: 13,
      image: illus11,
      rotate: "-4deg",
      translateX: "8px",
      translateY: "-6px",
      scale: "1.02",
    },
    {
      id: 14,
      image: illus13,
      rotate: "3deg",
      translateX: "-5px",
      translateY: "8px",
      scale: "1.05",
    },
    {
      id: 15,
      image: illus14,
      rotate: "-5deg",
      translateX: "7px",
      translateY: "-3px",
      scale: "1.03",
    },
    {
      id: 16,
      image: illus12,
      rotate: "2deg",
      translateX: "-8px",
      translateY: "6px",
      scale: "0.97",
    },
    {
      id: 17,
      image: illus21,
      rotate: "4deg",
      translateX: "-7px",
      translateY: "2px",
      scale: "1.05",
    },
    {
      id: 18,
      image: illus19,
      rotate: "2deg",
      translateX: "-4px",
      translateY: "7px",
      scale: "1.03",
    },
    {
      id: 19,
      image: illus20,
      rotate: "-4deg",
      translateX: "9px",
      translateY: "-4px",
      scale: "1.04",
    },
    {
      id: 20,
      image: illus2,
      rotate: "5deg",
      translateX: "-10px",
      translateY: "5px",
      scale: "0.96",
    },
    {
      id: 21,
      image: illus22,
      rotate: "-2deg",
      translateX: "7px",
      translateY: "-6px",
      scale: "1.02",
    },
    {
      id: 22,
      image: illus23,
      rotate: "6deg",
      translateX: "-5px",
      translateY: "9px",
      scale: "0.95",
    },
    {
      id: 23,
      image: illus24,
      rotate: "-4deg",
      translateX: "12px",
      translateY: "-3px",
      scale: "1.04",
    },
    {
      id: 24,
      image: illus25,
      rotate: "3deg",
      translateX: "-7px",
      translateY: "6px",
      scale: "1",
    },
    {
      id: 25,
      image: illus26,
      rotate: "-2deg",
      translateX: "5px",
      translateY: "-7px",
      scale: "1.03",
    },
    {
      id: 26,
      image: illus27,
      rotate: "5deg",
      translateX: "-9px",
      translateY: "4px",
      scale: "0.97",
    },
    {
      id: 27,
      image: illus4,
      rotate: "-4deg",
      translateX: "11px",
      translateY: "-5px",
      scale: "1.05",
    },
  ];

  /*
   * ---------------------------------------------------------
   * MOBILE NAVIGATION
   * ---------------------------------------------------------
   */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /*
   * Close mobile menu when the viewport becomes desktop-sized.
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Lock body scrolling while the mobile sidebar is open.
   */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else if (lightboxIndex === null) {
      document.body.style.overflow = "";
    }

    return () => {
      if (lightboxIndex === null) {
        document.body.style.overflow = "";
      }
    };
  }, [mobileMenuOpen, lightboxIndex]);

  /*
   * Close mobile menu with Escape.
   */

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  /*
   * ---------------------------------------------------------
   * SCROLL REVEAL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /*
   * ---------------------------------------------------------
   * LIGHTBOX
   * ---------------------------------------------------------
   */

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToNextImage = () => {
    setLightboxIndex((currentIndex) =>
      currentIndex === illustrationItems.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setLightboxIndex((currentIndex) =>
      currentIndex === 0
        ? illustrationItems.length - 1
        : currentIndex - 1
    );
  };

  /*
   * ---------------------------------------------------------
   * LIGHTBOX KEYBOARD CONTROLS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      } else if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  /*
   * ---------------------------------------------------------
   * LOCK BODY SCROLL WHEN LIGHTBOX IS OPEN
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else if (!mobileMenuOpen) {
      document.body.style.overflow = "";
    }

    return () => {
      if (!mobileMenuOpen) {
        document.body.style.overflow = "";
      }
    };
  }, [lightboxIndex, mobileMenuOpen]);

  return (
    <>
      <main className={styles.page}>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav className={styles.navbar}>
          <div className={styles.navBrand}>
            <a href="/" onClick={closeMobileMenu}>
              KAEAOU
            </a>

            <span>VISUAL ARTIST / ARCHIVE</span>
          </div>

          <div className={styles.navLinks}>
            <a href="#project">PROJECTS</a>
            <a href="#illustration">ILLUSTRATION</a>
            <a href="/sketches">SKETCHES</a>
            <a href="/about">ABOUT</a>
          </div>

          <div className={styles.navDetails}>
            <span>ARCHIVE / 2026</span>
            <span>KA / 01</span>
          </div>

          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
          </button>
        </nav>

        {/* =====================================================
            MOBILE SIDEBAR
        ===================================================== */}

        <div
          className={`${styles.mobileMenuOverlay} ${
            mobileMenuOpen ? styles.mobileMenuOverlayOpen : ""
          }`}
          onClick={closeMobileMenu}
          aria-hidden={!mobileMenuOpen}
        />

        <aside
          className={`${styles.mobileSidebar} ${
            mobileMenuOpen ? styles.mobileSidebarOpen : ""
          }`}
          aria-hidden={!mobileMenuOpen}
          aria-label="Mobile navigation"
        >
          <div className={styles.mobileSidebarTop}>
            <div className={styles.mobileSidebarBrand}>
              <span>KAEAOU</span>
              <small>VISUAL ARTIST / ARCHIVE</small>
            </div>

            <button
              type="button"
              className={styles.mobileMenuClose}
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>

          <div className={styles.mobileSidebarLine} />

          <nav className={styles.mobileSidebarLinks}>
            <a href="#project" onClick={closeMobileMenu}>
              <span>01</span>
              <span>PROJECTS</span>
            </a>

            <a href="#illustration" onClick={closeMobileMenu}>
              <span>02</span>
              <span>ILLUSTRATION</span>
            </a>

            <a href="/sketches" onClick={closeMobileMenu}>
              <span>03</span>
              <span>SKETCHES</span>
            </a>

            <a href="/about" onClick={closeMobileMenu}>
              <span>04</span>
              <span>ABOUT</span>
            </a>
          </nav>

          <div className={styles.mobileSidebarBottom}>
            <span>ARCHIVE / 2026</span>
            <span>KA / 01</span>
          </div>
        </aside>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src={heroImage}
              alt="KAEAOU portfolio"
              className={styles.welcomeImage}
            />
          </div>

          <div className={styles.heroShade} />

          <div className={styles.heroNumeral}>01</div>

          <div className={styles.heroVertical}>
            <span>ARCHIVE</span>
            <span>VISUAL STUDIES</span>
          </div>

          <div className={styles.heroTopLine}>
            <span>KAE / 2023—2026</span>
            <span>CONCEPT ART — ILLUSTRATION</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>
              <span className={styles.kickerLine} />
              <span>ARTIST ARCHIVE</span>
              <span className={styles.kickerLine} />
            </div>

            <h1 className={styles.cinzelBoldLogo}>KAEAOU</h1>

            <p className={styles.heroSubtitle}>
              Concept Art · Illustration · Character Design
            </p>
          </div>

          <div className={styles.heroBottom}>
            <div>
              <span className={styles.metaLabel}>ENTRY 01</span>
              <span>PERSONAL WORK / SELECTED STUDIES</span>
            </div>

            <div className={styles.heroCoordinates}>
              <span>3°N</span>
              <span>102°E</span>
            </div>

            <a href="#project" className={styles.heroScroll}>
              <span>SCROLL TO EXPLORE</span>
            </a>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section id="project" className={styles.secondSection}>
          <div className={styles.sectionWatermark}>02</div>

          <div className={styles.sectionRail}>
            <span>PROJECT</span>
            <span>SELECTED WORKS</span>
          </div>

          <div
            className={`${styles.conceptHeader} ${styles.revealUp}`}
            data-reveal
          >
            <div>
              <span className={styles.sectionIndex}>02 / 03</span>
              <h2>Projects</h2>
            </div>

            <div className={styles.conceptIntro}>
              <span>VISUAL DEVELOPMENT</span>

              <p>
                Projects developed through image,
                atmosphere and narrative.
              </p>
            </div>
          </div>

          <div
            className={`${styles.conceptRule} ${styles.revealLine}`}
            data-reveal
          />

          <div className={styles.secondContent}>
            <article
              className={`${styles.imageWrapper} ${styles.conceptLarge} ${styles.revealImage}`}
              data-reveal
              style={{ "--delay": "0ms" }}
            >
              <div className={styles.imageNumber}>01</div>

              <a href="moribloom">
                <img
                  src={BCD10}
                  alt="Moribloom concept"
                  className={styles.firstImage}
                />
              </a>

              <div className={styles.imageTag}>
                <span>01 — Moribloom</span>
              </div>

              <div className={styles.imageCaption}>
                <span>FIG. 01</span>
              </div>
            </article>

            <article
              className={`${styles.imageWrapper} ${styles.conceptTall} ${styles.revealImage}`}
              data-reveal
              style={{ "--delay": "180ms" }}
            >
              <div className={styles.imageNumber}>02</div>

              <a href="artbook">
                <img
                  src={artbook}
                  alt="Artbook concept"
                  className={styles.firstImage}
                />
              </a>

              <div className={styles.imageTag}>
                <span>02 — ARTBOOK</span>
              </div>

              <div className={styles.imageCaption}>
                <span>FIG. 02</span>
              </div>
            </article>

            <article
              className={`${styles.imageWrapper} ${styles.conceptWide} ${styles.revealImage}`}
              data-reveal
              style={{ "--delay": "320ms" }}
            >
              <div className={styles.imageNumber}>03</div>

              <a href="brochure">
                <img
                  src={brochure}
                  alt="Brochure concept"
                  className={styles.firstImage}
                />
              </a>

              <div className={styles.imageTag}>
                <span>03 — BROCHURE</span>
              </div>

              <div className={styles.imageCaption}>
                <span>FIG. 03</span>
              </div>
            </article>
          </div>

          <div
            className={`${styles.conceptFooter} ${styles.revealUp}`}
            data-reveal
          >
            <span>ARCHIVE NOTE — 002</span>
            <span>CLICK AN IMAGE TO VIEW CONTENT</span>
          </div>
        </section>

        {/* =====================================================
            ILLUSTRATION
        ===================================================== */}

        <section id="illustration" className={styles.thirdSection}>
          <div className={styles.illustrationAtmosphere} />

          <div
            className={`${styles.illustrationHeader} ${styles.revealUp}`}
            data-reveal
          >
            <div className={styles.illustrationTitleBlock}>
              <span className={styles.sectionIndex}>03 / 03</span>
              <h2>Illustration</h2>
            </div>

            <div className={styles.illustrationDescription}>
              <span>THE DRAWING ARCHIVE</span>

              <p>
                A collection of fanart, work and personal drawings.
              </p>
            </div>

            <div className={styles.illustrationNumber}>27</div>
          </div>

          <div
            className={`${styles.illustrationRule} ${styles.revealLine}`}
            data-reveal
          >
            <span>SELECTED ENTRIES</span>
            <span>2023 — 2026</span>
          </div>

          <div className={styles.illustrationGrid}>
            {illustrationItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                data-reveal
                className={`${styles.gridCell} ${styles.revealCard}`}
                style={{
                  "--rotate": item.rotate,
                  "--translate-x": item.translateX,
                  "--translate-y": item.translateY,
                  "--scale": item.scale,
                  "--delay": `${(index % 4) * 90}ms`,
                }}
                onClick={() => handleImageClick(index)}
                aria-label={`Open illustration ${item.id}`}
              >
                <span className={styles.gridIndex}>
                  {String(item.id).padStart(2, "0")}
                </span>

                <div className={styles.imageWrapperPair}>
                  <img
                    src={item.image}
                    alt={`Illustration ${item.id}`}
                    className={styles.illustrationImage}
                  />
                </div>

                <span className={styles.gridCorner}>ENTRY</span>
              </button>
            ))}
          </div>

          <div
            className={`${styles.illustrationFooter} ${styles.revealUp}`}
            data-reveal
          >
            <span>END OF SELECTED ARCHIVE</span>
            <span>KA / VISUAL STUDIES</span>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className={styles.footer}>

          {/* =================================================
              DESKTOP FOOTER
          ================================================= */}

          <div className={styles.footerMain}>
            <div
              className={`${styles.footerBrandBlock} ${styles.revealUp}`}
              data-reveal
            >
              <span className={styles.footerEyebrow}>
                VISUAL ARTIST / ARCHIVE
              </span>

              <div className={styles.footerBrand}>KAEAOU</div>
            </div>

            <div
              className={`${styles.footerNavigation} ${styles.revealUp}`}
              data-reveal
              style={{ "--delay": "100ms" }}
            >
              <span>INDEX</span>

              <a href="#project">01 — PROJECTS</a>
              <a href="#illustration">02 — ILLUSTRATION</a>
              <a href="/sketches">03 — SKETCHES</a>
              <a href="/about">04 — ABOUT</a>
            </div>

            <div
              className={`${styles.footerSocials} ${styles.revealUp}`}
              data-reveal
              style={{ "--delay": "180ms" }}
            >
              <span>SOCIAL / CONTACT</span>

              <a
                href="https://www.instagram.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>

              <a
                href="https://www.tiktok.com/@kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                TIKTOK
              </a>

              <a
                href="https://x.com/kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>

              <a
                href="https://vgen.co/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                VGEN
              </a>

              <a
                href="https://www.artstation.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                ARTSTATION
              </a>
            </div>

            <div
              className={`${styles.footerDetails} ${styles.revealUp}`}
              data-reveal
              style={{ "--delay": "260ms" }}
            >
              <span>ARCHIVE / 2026</span>
              <span>KA / 01</span>
              <span>EST. 2023</span>
            </div>
          </div>

          {/* =================================================
              PERSONAL MOBILE FOOTER
          ================================================= */}

          <div className={styles.mobileFooter}>

            <div
              className={`${styles.mobileFooterHeader} ${styles.revealUp}`}
              data-reveal
            >
              <span className={styles.mobileFooterEyebrow}>
                KA / VISUAL ARTIST
              </span>

              <span className={styles.mobileFooterArchive}>
                ARCHIVE / 2026
              </span>
            </div>

            <div
              className={`${styles.mobileFooterBrand} ${styles.revealUp}`}
              data-reveal
            >
              KAEAOU
            </div>

            <div
              className={`${styles.mobileFooterStatement} ${styles.revealUp}`}
              data-reveal
            >
              <span>01 — PERSONAL ARCHIVE</span>

              <p>
                Concept art, illustration,
                character design and visual studies.
              </p>
            </div>

            <div
              className={`${styles.mobileFooterRule} ${styles.revealLine}`}
              data-reveal
            />

            <div className={styles.mobileFooterLinks}>

              <div
                className={`${styles.mobileFooterLinkGroup} ${styles.revealUp}`}
                data-reveal
              >
                <span>EXPLORE</span>

                <a href="#project">
                  <small>01</small>
                  PROJECTS
                </a>

                <a href="#illustration">
                  <small>02</small>
                  ILLUSTRATION
                </a>

                <a href="/sketches">
                  <small>03</small>
                  SKETCHES
                </a>

                <a href="/about">
                  <small>04</small>
                  ABOUT
                </a>
              </div>

              <div
                className={`${styles.mobileFooterLinkGroup} ${styles.revealUp}`}
                data-reveal
              >
                <span>CONNECT</span>

                <a
                  href="https://www.instagram.com/kaeaou"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>

                <a
                  href="https://www.tiktok.com/@kaeaouu"
                  target="_blank"
                  rel="noreferrer"
                >
                  TIKTOK
                </a>

                <a
                  href="https://x.com/kaeaouu"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>

                <a
                  href="https://vgen.co/kaeaou"
                  target="_blank"
                  rel="noreferrer"
                >
                  VGEN
                </a>

                <a
                  href="https://www.artstation.com/kaeaou"
                  target="_blank"
                  rel="noreferrer"
                >
                  ARTSTATION
                </a>
              </div>

            </div>

            <div
              className={`${styles.mobileFooterSignature} ${styles.revealUp}`}
              data-reveal
            >
              <span>KA / 01</span>
              <span>EST. 2023</span>
              <span>© 2026 KAEAOU</span>
            </div>

            <div className={styles.mobileFooterEnd}>
              <span>END OF ARCHIVE</span>
              <span>VOL. 01</span>
            </div>

          </div>

          {/* =================================================
              DESKTOP BOTTOM
          ================================================= */}

          <div
            className={`${styles.footerRule} ${styles.revealLine}`}
            data-reveal
          />

          <div
            className={`${styles.footerBottom} ${styles.revealUp}`}
            data-reveal
          >
            <span>© 2026 KAEAOU</span>
            <span>SELECTED WORKS / VOL. 01</span>
            <span>CONCEPT · ILLUSTRATION · CHARACTER DESIGN</span>
          </div>

        </footer>
      </main>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing illustration ${illustrationItems[lightboxIndex].id}`}
        >
          <div
            className={styles.lightboxTop}
            onClick={(event) => event.stopPropagation()}
          >
            <span>ARCHIVE / IMAGE VIEW</span>

            <span>ILLUSTRATION</span>

            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              ×
            </button>
          </div>

          <div
            className={styles.lightboxImageWrap}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={illustrationItems[lightboxIndex].image}
              alt={`Illustration ${illustrationItems[lightboxIndex].id}`}
              className={styles.lightboxImage}
            />
          </div>

          <div className={styles.lightboxBottom}>
            <span>KAEAOU</span>

            <span>
              {String(illustrationItems[lightboxIndex].id).padStart(2, "0")} /{" "}
              {String(illustrationItems.length).padStart(2, "0")}
            </span>

            <span>ESC TO CLOSE</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;