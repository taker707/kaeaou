import React, { useEffect, useState } from "react";
import styles from "../styles/Brochure.module.css";

import bro1 from "../assets/brochure/bro1.jpg";
import bro2 from "../assets/brochure/bro2.jpg";
import bro3 from "../assets/brochure/bro3.jpg";
import bro4 from "../assets/brochure/bro4.jpg";

const RECORDS = [
  { src: bro1, num: "01", title: "FIRST RECORD", alt: "Kaeaou archived work one" },
  { src: bro2, num: "02", title: "SECOND RECORD", alt: "Kaeaou archived work two" },
  { src: bro3, num: "03", title: "THIRD RECORD", alt: "Kaeaou archived work three" },
  { src: bro4, num: "04", title: "FOURTH RECORD", alt: "Kaeaou archived work four" },
];

function MobileSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`${styles.sidebarToggle} ${open ? styles.sidebarToggleOpen : ""
          }`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.sidebarBackdrop} ${open ? styles.sidebarBackdropOpen : ""
          }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarDiamond}>✦</span>
          <span className={styles.sidebarTitle}>KAEAOU</span>
          <span className={styles.sidebarSubtitle}>PERSONAL ARCHIVE</span>
        </div>

        <div className={styles.sidebarLinks}>
          <a
            href="/"
            className={styles.sidebarLink}
            onClick={() => setOpen(false)}
          >
            <span>01</span>
            HOME
          </a>

          <a
            href="/moribloom"
            className={styles.sidebarLink}
            onClick={() => setOpen(false)}
          >
            <span>02</span>
            MORIBLOOM
          </a>

          <a
            href="/artbook"
            className={styles.sidebarLink}
            onClick={() => setOpen(false)}
          >
            <span>03</span>
            ARTBOOK
          </a>

          <a
            href="/sketches"
            className={styles.sidebarLink}
            onClick={() => setOpen(false)}
          >
            <span>04</span>
            SKETCHES
          </a>

          <a
            href="/about"
            className={styles.sidebarLink}
            onClick={() => setOpen(false)}
          >
            <span>05</span>
            ABOUT
          </a>
        </div>

        <div className={styles.sidebarFooter}>
          <span className={styles.statusDot} />
          <span>KAEAOU / RECORD ACTIVE</span>
        </div>
      </aside>
    </>
  );
}

function Lightbox({ record, onClose }) {
  useEffect(() => {
    if (!record) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    // Lock body scroll while open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!record) return null;

  return (
    <div
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${record.title} enlarged`}
    >
      <div className={styles.lightboxGrain} aria-hidden="true" />

      <button
        type="button"
        className={styles.lightboxClose}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <figure
        className={styles.lightboxFrame}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.lightboxTape} aria-hidden="true" />

        <div className={styles.lightboxTop}>
          <span>KA / {record.num}</span>
          <span>1999</span>
        </div>

        <div className={styles.lightboxPhoto}>
          <img src={record.src} alt={record.alt} />
          <div className={styles.lightboxOverlay} aria-hidden="true" />
        </div>

        <figcaption className={styles.lightboxCaption}>
          <div className={styles.lightboxCaptionHeading}>
            <span className={styles.lightboxNumber}>{record.num}</span>
            <span className={styles.lightboxTitle}>{record.title}</span>
            <span className={styles.lightboxSymbol}>✦</span>
          </div>

          <div className={styles.lightboxMeta}>
            <span>KA / VISUAL</span>
            <span>ARCHIVE {record.num}</span>
          </div>
        </figcaption>
      </figure>

      <span className={styles.lightboxHint}>CLICK OUTSIDE TO CLOSE</span>
    </div>
  );
}

export default function Brochure() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const revealItems = document.querySelectorAll(
      `.${styles.reveal}, .${styles.polaroid}, .${styles.timeDivider}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      {/* Texture */}
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      {/* Page-load flash */}
      <div className={styles.pageLoader} aria-hidden="true">
        <div className={styles.loaderCircle}>
          <span>K</span>
        </div>

        <div className={styles.loaderLine} />

        <span className={styles.loaderYear}>1999</span>
      </div>

      {/* Decorative stars */}
      <div className={styles.stars} aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
      </div>

      {/* Floating archive particles */}
      <div className={styles.archiveParticles} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Decorative edge marks */}
      <div className={styles.edgeMarks} aria-hidden="true">
        <span className={styles.edgeTopLeft}>01</span>
        <span className={styles.edgeTopRight}>K</span>
        <span className={styles.edgeBottomLeft}>1999</span>
        <span className={styles.edgeBottomRight}>02</span>
      </div>

      {/* Navbar (desktop only) */}
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <a href="/" className={styles.navLogo} aria-label="Kaeaou home">
            <span className={styles.navLogoDiamond}>✦</span>

            <span className={styles.navLogoText}>
              <small>KAEAOU</small>
              <strong>PERSONAL ARCHIVE</strong>
            </span>
          </a>

          <div className={styles.navLinks}>
            <a href="/" className={styles.navLink}>
              <span>01</span>
              HOME
            </a>

            <a href="/moribloom" className={styles.navLink}>
              <span>02</span>
              MORIBLOOM
            </a>

            <a href="/artbook" className={styles.navLink}>
              <span>03</span>
              ARTBOOK
            </a>

            <a href="/sketches" className={styles.navLink}>
              <span>04</span>
              SKETCHES
            </a>

            <a href="/about" className={styles.navLink}>
              <span>05</span>
              ABOUT
            </a>
          </div>

          <div className={styles.navStatus}>
            <span className={styles.statusDot} />
            <span>KAEAOU / RECORD ACTIVE</span>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (non-desktop only) */}
      <MobileSidebar />

      <main className={styles.main}>
        {/* Intro */}
        <section id="home" className={`${styles.intro} ${styles.reveal}`}>
          <div className={styles.introTop}>
            <span>FILE NO. 1999—K</span>

            <span className={styles.introTopCenter}>
              PERSONAL COLLECTION
            </span>

            <span>VOL. 01</span>
          </div>

          <div className={styles.introMain}>
            <div className={styles.introCopy}>
              <p className={styles.introEyebrow}>
                PERSONAL VISUAL ARCHIVE
              </p>

              <h1>
                VISUAL
                <br />
                <em>ARCHIVE.</em>
              </h1>

              <div className={styles.titleLine}>
                <span />
                <span>KA / 1999</span>
              </div>
            </div>

            {/* Decorative clock */}
            <div className={styles.clock} aria-hidden="true">
              <div className={styles.clockOuterRing}>
                <div className={styles.clockFace}>
                  <span className={styles.clockNumber12}>XII</span>
                  <span className={styles.clockNumber3}>III</span>
                  <span className={styles.clockNumber6}>VI</span>
                  <span className={styles.clockNumber9}>IX</span>

                  <span className={`${styles.clockTick} ${styles.tick1}`} />
                  <span className={`${styles.clockTick} ${styles.tick2}`} />
                  <span className={`${styles.clockTick} ${styles.tick3}`} />
                  <span className={`${styles.clockTick} ${styles.tick4}`} />

                  <div className={styles.clockHandHour} />
                  <div className={styles.clockHandMinute} />
                  <div className={styles.clockCenter} />
                </div>
              </div>

              <span className={styles.clockLabel}>TEMPORAL / 1999</span>
            </div>
          </div>

          <div className={styles.introBottom}>
            <span>ARCHIVE</span>

            <div className={styles.scrollIndicator}>
              <span />
              <span />
              <span />
            </div>

            <span>01—02</span>
          </div>
        </section>

        {/* Project Descriptor */}
        <section
          className={`${styles.descriptor} ${styles.reveal}`}
          aria-label="Project descriptor"
        >
          <div className={styles.descriptorInner}>
            <div className={styles.descriptorTop}>
              <span>FILE NO. 1999—K</span>

              <span className={styles.descriptorTopCenter}>
                PROJECT DESCRIPTOR
              </span>

              <span>FOLIO 00</span>
            </div>

            <div className={styles.descriptorMain}>
              <div className={styles.descriptorSide} aria-hidden="true">
                <span className={styles.descriptorSideDiamond}>✦</span>
                <span className={styles.descriptorSideLabel}>
                  ABSTRACT
                </span>
              </div>

              <div className={styles.descriptorCopy}>
                <p className={styles.descriptorEyebrow}>
                  FROM THE PERSONAL ARCHIVE
                </p>

                <p className={styles.descriptorText}>
                  A project to design a promotional brochure based on Reverse: 1999.
                </p>

                <div className={styles.descriptorRule}>
                  <span />
                  <span>KA / 1999</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative descriptor stamp */}
          <div className={styles.descriptorStamp} aria-hidden="true">
            <span>ABSTRACT</span>
            <strong>00</strong>
            <span>FILE NO. 1999—K</span>
          </div>
        </section>

        {/* 1999 Stamp */}
        <div
          className={`${styles.archiveStamp} ${styles.reveal}`}
          aria-hidden="true"
        >
          <span>ARCHIVED</span>
          <strong>1999</strong>
          <span>PERSONAL RECORD</span>
        </div>

        {/* Gallery */}
        <section id="memories" className={styles.gallery}>
          {/* Decorative top rule */}
          <div className={styles.galleryHeader}>
            <div>
              <span className={styles.gallerySmall}>ARCHIVE</span>
              <span className={styles.galleryIndex}>01 / 04</span>
            </div>

            <div className={styles.galleryRule}>
              <span />
              <span />
            </div>

            <div className={styles.galleryMark}>✦</div>
          </div>

          {/* ---- RECORD 01 ---- */}
          <div className={styles.polaroidWrap}>
            {/* Scrap next to image one */}
            <div
              className={`${styles.paperScrap} ${styles.scrapOne}`}
              aria-hidden="true"
            >
              <span>MEMORY</span>
              <strong>01</strong>
            </div>

            {/* Image One */}
            <article
              className={`${styles.polaroid} ${styles.polaroidOne}`}
            >
              <div className={styles.tape} aria-hidden="true" />

              <div className={styles.polaroidTop}>
                <span>KA / 001</span>
                <span>1999</span>
              </div>

              <div
                className={styles.photo}
                onClick={() => setLightboxIndex(0)}
                role="button"
                tabIndex={0}
                aria-label="Open archived work one"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(0);
                  }
                }}
              >
                <img src={bro1} alt="Kaeaou archived work one" />

                <div className={styles.photoOverlay} aria-hidden="true" />

                <div className={styles.photoCorner} aria-hidden="true" />

                <div className={styles.photoScan} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                <div className={styles.captionHeading}>
                  <span className={styles.captionNumber}>01</span>

                  <span className={styles.captionTitle}>
                    FIRST RECORD
                  </span>

                  <span className={styles.captionSymbol}>✦</span>
                </div>

                <div className={styles.captionMeta}>
                  <span>KA / VISUAL</span>
                  <span>ARCHIVE 01</span>
                </div>
              </div>
            </article>
          </div>

          {/* Divider */}
          <div
            className={`${styles.timeDivider} ${styles.reveal}`}
            aria-hidden="true"
          >
            <span />
            <div className={styles.dividerCenter}>
              <i />
              <p>1999</p>
              <i />
            </div>
            <span />
          </div>

          {/* ---- RECORD 02 ---- */}
          <div className={styles.polaroidWrap}>
            {/* Scrap next to image two */}
            <div
              className={`${styles.paperScrap} ${styles.scrapTwo}`}
              aria-hidden="true"
            >
              <span>ARCHIVE</span>
              <strong>02</strong>
              <span>KAEAOU</span>
            </div>

            {/* Image Two */}
            <article
              className={`${styles.polaroid} ${styles.polaroidTwo}`}
            >
              <div className={styles.tape} aria-hidden="true" />

              <div className={styles.polaroidTop}>
                <span>KA / 002</span>
                <span>1999</span>
              </div>

              <div
                className={styles.photo}
                onClick={() => setLightboxIndex(1)}
                role="button"
                tabIndex={0}
                aria-label="Open archived work two"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(1);
                  }
                }}
              >
                <img src={bro2} alt="Kaeaou archived work two" />

                <div className={styles.photoOverlay} aria-hidden="true" />

                <div className={styles.photoCorner} aria-hidden="true" />

                <div className={styles.photoScan} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                <div className={styles.captionHeading}>
                  <span className={styles.captionNumber}>02</span>

                  <span className={styles.captionTitle}>
                    SECOND RECORD
                  </span>

                  <span className={styles.captionSymbol}>✦</span>
                </div>

                <div className={styles.captionMeta}>
                  <span>KA / VISUAL</span>
                  <span>ARCHIVE 02</span>
                </div>
              </div>
            </article>
          </div>

          {/* Divider */}
          <div
            className={`${styles.timeDivider} ${styles.reveal}`}
            aria-hidden="true"
          >
            <span />
            <div className={styles.dividerCenter}>
              <i />
              <p>1999</p>
              <i />
            </div>
            <span />
          </div>

          {/* ---- RECORD 03 ---- */}
          <div className={styles.polaroidWrap}>
            {/* Scrap next to image three */}
            <div
              className={`${styles.paperScrap} ${styles.scrapThree}`}
              aria-hidden="true"
            >
              <span>MEMORY</span>
              <strong>03</strong>
              <span>KAEAOU</span>
            </div>

            {/* Image Three */}
            <article
              className={`${styles.polaroid} ${styles.polaroidThree}`}
            >
              <div className={styles.tape} aria-hidden="true" />

              <div className={styles.polaroidTop}>
                <span>KA / 003</span>
                <span>1999</span>
              </div>

              <div
                className={styles.photo}
                onClick={() => setLightboxIndex(2)}
                role="button"
                tabIndex={0}
                aria-label="Open archived work three"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(2);
                  }
                }}
              >
                <img src={bro3} alt="Kaeaou archived work three" />

                <div className={styles.photoOverlay} aria-hidden="true" />

                <div className={styles.photoCorner} aria-hidden="true" />

                <div className={styles.photoScan} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                <div className={styles.captionHeading}>
                  <span className={styles.captionNumber}>03</span>

                  <span className={styles.captionTitle}>
                    THIRD RECORD
                  </span>

                  <span className={styles.captionSymbol}>✦</span>
                </div>

                <div className={styles.captionMeta}>
                  <span>KA / VISUAL</span>
                  <span>ARCHIVE 03</span>
                </div>
              </div>
            </article>
          </div>

          {/* Divider */}
          <div
            className={`${styles.timeDivider} ${styles.reveal}`}
            aria-hidden="true"
          >
            <span />
            <div className={styles.dividerCenter}>
              <i />
              <p>1999</p>
              <i />
            </div>
            <span />
          </div>

          {/* ---- RECORD 04 ---- */}
          <div className={styles.polaroidWrap}>
            {/* Scrap next to image four */}
            <div
              className={`${styles.paperScrap} ${styles.scrapFour}`}
              aria-hidden="true"
            >
              <span>ARCHIVE</span>
              <strong>04</strong>
              <span>KAEAOU</span>
            </div>

            {/* Image Four */}
            <article
              className={`${styles.polaroid} ${styles.polaroidFour}`}
            >
              <div className={styles.tape} aria-hidden="true" />

              <div className={styles.polaroidTop}>
                <span>KA / 004</span>
                <span>1999</span>
              </div>

              <div
                className={styles.photo}
                onClick={() => setLightboxIndex(3)}
                role="button"
                tabIndex={0}
                aria-label="Open archived work four"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(3);
                  }
                }}
              >
                <img src={bro4} alt="Kaeaou archived work four" />

                <div className={styles.photoOverlay} aria-hidden="true" />

                <div className={styles.photoCorner} aria-hidden="true" />

                <div className={styles.photoScan} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                <div className={styles.captionHeading}>
                  <span className={styles.captionNumber}>04</span>

                  <span className={styles.captionTitle}>
                    FOURTH RECORD
                  </span>

                  <span className={styles.captionSymbol}>✦</span>
                </div>

                <div className={styles.captionMeta}>
                  <span>KA / VISUAL</span>
                  <span>ARCHIVE 04</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Bottom ornament */}
        <div className={styles.bottomOrnament} aria-hidden="true">
          <span>✦</span>
          <span />
          <span>1999</span>
          <span />
          <span>✦</span>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          {/* Kaeaou identity */}
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandMark} aria-hidden="true">
              ✦
            </div>

            <div>
              <h3>KAEAOU</h3>
              <p>PERSONAL VISUAL ARCHIVE</p>
            </div>
          </div>

          {/* Circular K logo */}
          <div className={styles.footerSeal} aria-hidden="true">
            <div className={styles.sealOuter}>
              <span className={styles.sealTop}>KAEAOU</span>
              <span className={styles.sealLeft}>✦</span>
              <strong>K</strong>
              <span className={styles.sealRight}>✦</span>
              <span className={styles.sealBottom}>1999</span>
            </div>
          </div>

          {/* Socials */}
          <div className={styles.footerSocial}>
            <span className={styles.footerSocialLabel}>FIND KAEAOU</span>

            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                <span>TikTok</span>
              </a>

              <a
                href="https://x.com/kaeaouu"
                target="_blank"
                rel="noreferrer"
              >
                <span>X</span>
              </a>

              <a
                href="https://vgen.co/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>VGEN</span>
              </a>

              <a
                href="https://www.artstation.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>ARTSTATION</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        record={
          lightboxIndex === null ? null : RECORDS[lightboxIndex]
        }
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}