import { useEffect, useState } from "react";
import styles from "../styles/Artbook.module.css";

import artbook1 from "../assets/artbook/aaartbook1.jpg";
import artbook2 from "../assets/artbook/aaartbook2.jpg";
import artbook3 from "../assets/artbook/aaartbook3.jpg";
import artbook4 from "../assets/artbook/aaartbook4.jpg";
import artbook5 from "../assets/artbook/aaartbook5.jpg";
import artbook6 from "../assets/artbook/aaartbook6.jpg";
import artbook7 from "../assets/artbook/aaartbook7.jpg";
import artbook8 from "../assets/artbook/aaartbook8.jpg";
import artbook9 from "../assets/artbook/aaartbook9.jpg";
import artbook10 from "../assets/artbook/aaartbook10.jpg";

const artwork = [
  artbook1,
  artbook2,
  artbook3,
  artbook4,
  artbook5,
  artbook6,
  artbook7,
  artbook8,
  artbook9,
  artbook10,
];

function Artbook() {
  const [loading, setLoading] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const [visibleEntries, setVisibleEntries] = useState(new Set());
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     PRELOAD
  ========================================================= */

  useEffect(() => {
    let mounted = true;
    let exitTimer;
    let removeTimer;

    const preloadImages = async () => {
      await Promise.all(
        artwork.map(
          (src) =>
            new Promise((resolve) => {
              const image = new Image();

              image.onload = () => {
                if (mounted) {
                  setLoadedImages((current) => current + 1);
                }

                resolve();
              };

              image.onerror = resolve;
              image.src = src;
            })
        )
      );

      if (mounted) {
        exitTimer = setTimeout(() => {
          setLoaderExiting(true);

          removeTimer = setTimeout(() => {
            if (mounted) {
              setLoading(false);
            }
          }, 1100);
        }, 700);
      }
    };

    preloadImages();

    return () => {
      mounted = false;

      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  /* =========================================================
     SCROLL REVEALS
  ========================================================= */

  useEffect(() => {
    const entries = document.querySelectorAll(
      `.${styles.entry}`
    );

    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.dataset.index
            );

            setVisibleEntries((current) => {
              const next = new Set(current);
              next.add(index);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    entries.forEach((entry) => {
      observer.observe(entry);
    });

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  /* =========================================================
     LIGHTBOX KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === artwork.length - 1
            ? 0
            : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0
            ? artwork.length - 1
            : current - 1
        );
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.classList.add("artbook-open");

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.classList.remove(
        "artbook-open"
      );
    };
  }, [activeImage]);

  /* =========================================================
     SIDEBAR — CLOSE ON ESCAPE
  ========================================================= */

  useEffect(() => {
    if (!menuOpen) return;

    const handle = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handle);

    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [menuOpen]);

  /* =========================================================
     SIDEBAR — LOCK BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const progress = Math.round(
    (loadedImages / artwork.length) * 100
  );

  return (
    <>
      <main className={styles.page}>
        <div className={styles.grain} />

        {/* =================================================
            NAVBAR
        ================================================= */}

        <nav className={styles.navbar}>
          <a
            href="/"
            className={styles.navBrand}
          >
            <span className={styles.navMark}>
              K
            </span>

            <span className={styles.navName}>
              KAEAOU
            </span>
          </a>

          <div className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="/moribloom">Moribloom</a>
            <a href="/brochure">Brochure</a>
            <a href="/sketches">Sketches</a>
            <a href="/about">About</a>
          </div>

          <div className={styles.navInfo}>
            <span>ARTBOOK / 01</span>
            <span>2026</span>
          </div>

          {/* Mobile hamburger */}

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* =================================================
            MOBILE SIDEBAR
        ================================================= */}

        <div
          className={`${styles.sidebarOverlay} ${
            menuOpen
              ? styles.sidebarOverlayOpen
              : ""
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <aside
          className={`${styles.sidebar} ${
            menuOpen ? styles.sidebarOpen : ""
          }`}
        >
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarBrand}>
              KAEAOU
            </span>

            <button
              className={styles.sidebarClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className={styles.sidebarLinks}>
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              <span>01</span>
              <strong>Home</strong>
              <span>↗</span>
            </a>

            <a
              href="/moribloom"
              onClick={() => setMenuOpen(false)}
            >
              <span>02</span>
              <strong>Moribloom</strong>
              <span>↗</span>
            </a>

            <a
              href="/brochure"
              onClick={() => setMenuOpen(false)}
            >
              <span>03</span>
              <strong>Brochure</strong>
              <span>↗</span>
            </a>

            <a
              href="/sketches"
              onClick={() => setMenuOpen(false)}
            >
              <span>04</span>
              <strong>Sketches</strong>
              <span>↗</span>
            </a>

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              <span>05</span>
              <strong>About</strong>
              <span>↗</span>
            </a>
          </nav>

          <div className={styles.sidebarFooter}>
            <span>ARTBOOK / 01</span>
            <span>2026</span>
          </div>
        </aside>

        {/* =================================================
            INTRO
        ================================================= */}

        <section
          id="top"
          className={styles.introduction}
        >
          <div className={styles.introNumber}>
            01
          </div>

          <div className={styles.introContent}>
            <p className={styles.eyebrow}>
              KAEAOU / SELECTED WORKS
            </p>

            <h1>
              KAEAOU
              <br />
              <em>ARTBOOK</em>
            </h1>

            <div className={styles.introRule} />
          </div>

          <div className={styles.introStamp}>
            <span>VISUAL ARCHIVE</span>

            <strong>K</strong>

            <span>KA / 01—10</span>
          </div>
        </section>

        {/* =================================================
            ARTWORK / ENTRIES
        ================================================= */}

        <section
          id="works"
          className={styles.artbook}
        >
          {artwork.map((image, index) => (
            <article
              className={`${styles.entry} ${
                visibleEntries.has(index)
                  ? styles.entryVisible
                  : ""
              }`}
              data-index={index}
              key={image}
              onClick={() =>
                setActiveImage(index)
              }
            >
              <div className={styles.entryMeta}>
                <span>
                  KAEAOU / ENTRY{" "}
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span>
                  VISUAL RECORD / 2026
                </span>
              </div>

              <div className={styles.imageFrame}>
                <div className={styles.imageNumber}>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <div className={styles.imageReveal}>
                  <img
                    src={image}
                    alt={`Kaeaou artwork ${
                      index + 1
                    }`}
                    loading="lazy"
                  />
                </div>

                <div
                  className={`${styles.corner} ${styles.cornerTL}`}
                />

                <div
                  className={`${styles.corner} ${styles.cornerTR}`}
                />

                <div
                  className={`${styles.corner} ${styles.cornerBL}`}
                />

                <div
                  className={`${styles.corner} ${styles.cornerBR}`}
                />
              </div>

              <div className={styles.entryFooter}>
                <span>
                  SPREAD —{" "}
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}{" "}
                  /{" "}
                  {String(artwork.length).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span
                  className={styles.viewLabel}
                >
                  VIEW ENTRY ↗
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          id="archive"
          className={styles.footer}
        >
          <div className={styles.footerSeal}>
            K
          </div>

          <div className={styles.footerIdentity}>
            <span className={styles.footerName}>
              KAEAOU
            </span>

            <span>
              ARTIST / VISUAL ARCHIVE
            </span>
          </div>

          <div className={styles.footerCenter}>
            <span>
              END OF VISUAL ARCHIVE
            </span>

            <span>
              THANK YOU FOR LOOKING
            </span>
          </div>

          {/* SOCIALS */}

          <div className={styles.footerSocials}>
            <span className={styles.socialLabel}>
              FIND KAEAOU
            </span>

            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>01</span>
                <strong>INSTAGRAM</strong>
                <span>↗</span>
              </a>

              <a
                href="https://tiktok.com/kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                <span>02</span>
                <strong>TIKTOK</strong>
                <span>↗</span>
              </a>

              <a
                href="https://x.com/kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                <span>03</span>
                <strong>X</strong>
                <span>↗</span>
              </a>

              <a
                href="https://vgen.co/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>04</span>
                <strong>VGEN</strong>
                <span>↗</span>
              </a>

              <a
                href="https://artstation.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>05</span>
                <strong>ARTSTATION</strong>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.footerMeta}>
            <span>KA—001</span>
            <span>010 ENTRIES</span>
            <span>2026</span>
          </div>
        </footer>

        {/* =================================================
            LIGHTBOX
        ================================================= */}

        {activeImage !== null && (
          <div
            className={styles.lightbox}
            onClick={() =>
              setActiveImage(null)
            }
          >
            <button
              className={styles.closeButton}
              onClick={() =>
                setActiveImage(null)
              }
              aria-label="Close artwork"
            >
              ×
            </button>

            <div
              className={styles.lightboxCounter}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              KAEAOU /{" "}
              {String(
                activeImage + 1
              ).padStart(2, "0")}{" "}
              /{" "}
              {String(
                artwork.length
              ).padStart(2, "0")}
            </div>

            <button
              className={`${styles.lightboxArrow} ${styles.previous}`}
              onClick={(event) => {
                event.stopPropagation();

                setActiveImage((current) =>
                  current === 0
                    ? artwork.length - 1
                    : current - 1
                );
              }}
              aria-label="Previous artwork"
            >
              ←
            </button>

            <img
              className={styles.lightboxImage}
              src={artwork[activeImage]}
              alt={`Kaeaou artwork ${
                activeImage + 1
              }`}
              onClick={(event) =>
                event.stopPropagation()
              }
            />

            <button
              className={`${styles.lightboxArrow} ${styles.next}`}
              onClick={(event) => {
                event.stopPropagation();

                setActiveImage((current) =>
                  current ===
                  artwork.length - 1
                    ? 0
                    : current + 1
                );
              }}
              aria-label="Next artwork"
            >
              →
            </button>
          </div>
        )}
      </main>

      {/* =====================================================
          LOADER
          Slides UP — no fade
      ===================================================== */}

      {loading && (
        <main
          className={`${styles.loader} ${
            loaderExiting
              ? styles.loaderExiting
              : ""
          }`}
        >
          <div className={styles.loaderPaper}>
            <div className={styles.loaderTop}>
              <span>ARCHIVE</span>
              <span>KA—001</span>
            </div>

            <div className={styles.loaderCenter}>
              <div className={styles.loaderSeal}>
                K
              </div>

              <h1>ARTBOOK</h1>

              <div className={styles.loaderLine} />

              <p>OPENING ARCHIVE</p>
            </div>

            <div className={styles.loaderBottom}>
              <span>VISUAL RECORD</span>

              <span>
                {String(progress).padStart(
                  3,
                  "0"
                )}
                %
              </span>
            </div>

            <div className={styles.loaderProgress}>
              <span
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Artbook;