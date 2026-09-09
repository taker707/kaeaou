import { useEffect, useState } from "react";
import styles from "../styles/Moribloom.module.css";

import BCD1 from "../assets/moribloom/BCD1.jpg";
import BCD2 from "../assets/moribloom/BCD2.jpg";
import BCD3 from "../assets/moribloom/BCD3.jpg";
import BCD4 from "../assets/moribloom/BCD4.jpg";
import BCD5 from "../assets/moribloom/BCD5.jpg";
import BCD6 from "../assets/moribloom/BCD6.jpg";
import BCD7 from "../assets/moribloom/BCD7.jpg";
import BCD8 from "../assets/moribloom/BCD8.jpg";
import BCD9 from "../assets/moribloom/BCD9.jpg";
import BCD10 from "../assets/moribloom/BCD10.jpg";
import BCD11 from "../assets/moribloom/BCD11.jpg";
import BCD12 from "../assets/moribloom/BCD12.jpg";

const artwork = [
  { src: BCD1, number: "01", layout: "heroImage" },
  { src: BCD2, number: "02", layout: "smallRight" },
  { src: BCD3, number: "03", layout: "wideLeft" },
  { src: BCD4, number: "04", layout: "tallRight" },
  { src: BCD5, number: "05", layout: "center" },
  { src: BCD6, number: "06", layout: "wideLeft" },
  { src: BCD7, number: "07", layout: "smallLeft" },
  { src: BCD8, number: "08", layout: "wideRight" },
  { src: BCD9, number: "09", layout: "offsetLeft" },
  { src: BCD10, number: "10", layout: "tallLeft" },
  { src: BCD11, number: "11", layout: "climax" },
  { src: BCD12, number: "12", layout: "finalImage" },
];

export default function Moribloom() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("01");

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const preloadImages = artwork.map(({ src }) => {
      return new Promise((resolve) => {
        const image = new Image();

        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
      });
    });

    Promise.all(preloadImages).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    });
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const sections = document.querySelectorAll("[data-artwork]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            setActiveSection(entry.target.dataset.artwork);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Close lightbox with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent page scrolling while lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className={styles.page}>
      {/* =========================
          LOADING SCREEN
      ========================== */}

      <div
        className={`${styles.loadingScreen} ${
          !loading ? styles.loadingScreenHidden : ""
        }`}
      >
        <div className={styles.loadingContent}>
          <span className={styles.loadingSmall}>
            KAEAOUS ARCHIVE
          </span>

          <h1 className={styles.loadingTitle}>
            MORIBLOOM
          </h1>

          <div className={styles.loadingLine}>
            <span />
          </div>

          <span className={styles.loadingStatus}>
            {loading ? "LOADING" : "ENTERING"}
          </span>
        </div>
      </div>

      {/* =========================
          NAVBAR
      ========================== */}

      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          KAEAOU
        </a>

        <div className={styles.navLinks}>
          <a href="/">HOME</a>
          <a href="/brochure">BROCHURE</a>
          <a href="/artbook">ARTBOOK</a>
          <a href="/sketches">SKETCHES</a>
          <a href="/about">ABOUT</a>
        </div>

        <div className={styles.navRight}>
          <span>PROJECT 04</span>
          <span>2026</span>
        </div>
      </nav>

      {/* =========================
          PROGRESS RAIL
      ========================== */}

      <aside className={styles.progressRail}>
        <div className={styles.progressLabel}>
          MORIBLOOM
        </div>

        <div className={styles.progressNumbers}>
          {artwork.map((piece) => (
            <span
              key={piece.number}
              className={
                activeSection === piece.number
                  ? styles.progressActive
                  : ""
              }
            >
              {piece.number}
            </span>
          ))}
        </div>

        <div className={styles.progressLine}>
          <span
            style={{
              height: `${(Number(activeSection) / 12) * 100}%`,
            }}
          />
        </div>
      </aside>

      <main>
        {/* =========================
            HERO
        ========================== */}

        <section className={styles.hero}>
          <div className={styles.heroTop}>
            <span>ARCHIVE / 004</span>

            <div className={styles.heroCoordinates}>
              <span>ILLUSTRATION</span>
              <span>VISUAL NARRATIVE</span>
            </div>
          </div>

          <div className={styles.heroCenter}>
            <div className={styles.heroSideText}>
              <span>01</span>
              <span>12</span>
            </div>

            <div className={styles.heroTitleWrap}>
              <p className={styles.eyebrow}>
                A SERIES BY KAEAOU
              </p>

              <h1 className={styles.heroTitle}>
                MORI
                <span>BLOOM</span>
              </h1>

              <div className={styles.titleRule}>
                <span />
              </div>
            </div>

            <div className={styles.heroStamp}>
              <span>KA</span>
              <span>EA</span>
              <span>OU</span>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroInfo}>
              <span>BCD SERIES</span>
              <span>12 WORKS</span>
            </div>

            <span className={styles.heroDate}>
              08 / 09 / 26
            </span>
          </div>

          <div className={styles.cornerMark} />
        </section>

        {/* =========================
            ARTWORK STORY
        ========================== */}

        <section className={styles.story}>
          {artwork.map((piece, index) => (
            <article
              key={piece.number}
              data-artwork={piece.number}
              className={`${styles.storyItem} ${styles[piece.layout]}`}
            >
              <div className={styles.storyNumber}>
                <span>BCD</span>
                <strong>{piece.number}</strong>
              </div>

              <div className={styles.verticalLabel}>
                KAEAOU / MORIBLOOM
              </div>

              {/* CLICKABLE IMAGE */}

              <button
                type="button"
                className={styles.artImageButton}
                onClick={() => setSelectedImage(piece)}
                aria-label={`View Moribloom artwork ${piece.number}`}
              >
                <div className={styles.artImage}>
                  <img
                    src={piece.src}
                    alt={`Moribloom artwork ${piece.number}`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              </button>

              <div className={styles.storyCaption}>
                <div className={styles.captionTop}>
                  <span>FRAME {piece.number}</span>

                  <span>
                    {String(index + 1).padStart(2, "0")} / 12
                  </span>
                </div>

                <div className={styles.captionBottom}>
                  <span>KAEAOU</span>
                  <span>MORIBLOOM</span>
                </div>
              </div>

              {index !== artwork.length - 1 && (
                <div className={styles.storyConnector} />
              )}
            </article>
          ))}
        </section>

        {/* =========================
            END SECTION
        ========================== */}

        <section className={styles.finalSection}>
          <div className={styles.finalGrid}>
            <div className={styles.finalSide}>
              <span>BCD / 012</span>
              <span>END OF SERIES</span>
            </div>

            <div className={styles.finalTitle}>
              <span>THE END</span>
              <strong>12</strong>
            </div>

            <div className={styles.finalStamp}>
              KAEAOU
            </div>
          </div>

          <div className={styles.finalRule} />

          <div className={styles.finalBottom}>
            <span>PROJECT COMPLETE</span>

            <a
              href="/"
              className={styles.backLink}
            >
              RETURN TO ARCHIVE
            </a>

            <span>2026</span>
          </div>
        </section>

        {/* =========================
            FOOTER
        ========================== */}

        <footer className={styles.footer}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <span className={styles.footerBrandSmall}>
                ARTIST / ILLUSTRATOR
              </span>

              <h2>KAEAOU</h2>

              <span className={styles.footerBrandSub}>
                VISUAL ARTIST · ILLUSTRATION · STORYTELLING
              </span>
            </div>

            <div className={styles.footerSocial}>
              <span className={styles.socialHeading}>
                FIND KAEAOU
              </span>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span>01</span>
                INSTAGRAM
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span>02</span>
                TIKTOK
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span>03</span>
                X
              </a>
            </div>
          </div>

          <div className={styles.footerDivider} />

          <div className={styles.footerBottom}>
            <span>© 2026 KAEAOU</span>

            <span>
              MORIBLOOM / BCD 001—012
            </span>

            <span>
              ALL RIGHTS RESERVED
            </span>
          </div>
        </footer>
      </main>

      {/* =========================
          IMAGE LIGHTBOX
      ========================== */}

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing Moribloom artwork ${selectedImage.number}`}
        >
          <div
            className={styles.lightboxTop}
            onClick={(event) => event.stopPropagation()}
          >
            <span>
              BCD / {selectedImage.number}
            </span>

            <span>
              MORIBLOOM
            </span>

            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setSelectedImage(null)}
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
              src={selectedImage.src}
              alt={`Moribloom artwork ${selectedImage.number}`}
              className={styles.lightboxImage}
            />
          </div>

          <div className={styles.lightboxBottom}>
            <span>
              KAEAOU
            </span>

            <span>
              {selectedImage.number} / 12
            </span>

            <span>
              ESC TO CLOSE
            </span>
          </div>
        </div>
      )}
    </div>
  );
}