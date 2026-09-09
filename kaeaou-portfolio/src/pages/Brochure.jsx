import React, { useEffect } from "react";
import styles from "../styles/Brochure.module.css";

import bro1 from "../assets/brochure/bro1.jpg";
import bro2 from "../assets/brochure/bro2.jpg";

export default function Brochure() {
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

      {/* Navbar */}
      <nav className={styles.navbar}>
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

          <a href="/sketches" className={styles.navLink}>
            <span>02</span>
            SKETCHES
          </a>

          <a href="moribloom" className={styles.navLink}>
            <span>03</span>
            MORIBLOOM
          </a>

          <a href="artbook" className={styles.navLink}>
            <span>04</span>
            ARTBOOK
          </a>          
          
          <a href="about" className={styles.navLink}>
            <span>05</span>
            ABOUT
          </a>
        </div>

        <div className={styles.navStatus}>
          <span className={styles.statusDot} />
          <span>KAEAOU / RECORD ACTIVE</span>
        </div>
      </nav>

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
              <span className={styles.galleryIndex}>01 / 02</span>
            </div>

            <div className={styles.galleryRule}>
              <span />
              <span />
            </div>

            <div className={styles.galleryMark}>
              ✦
            </div>
          </div>

          {/* Scrap */}
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

            <div className={styles.photo}>
              <img
                src={bro1}
                alt="Kaeaou archived work one"
              />

              <div
                className={styles.photoOverlay}
                aria-hidden="true"
              />

              <div
                className={styles.photoCorner}
                aria-hidden="true"
              />

              <div
                className={styles.photoScan}
                aria-hidden="true"
              />
            </div>

            <div className={styles.caption}>
              <div className={styles.captionHeading}>
                <span className={styles.captionNumber}>01</span>

                <span className={styles.captionTitle}>
                  FIRST RECORD
                </span>

                <span className={styles.captionSymbol}>
                  ✦
                </span>
              </div>

              <div className={styles.captionMeta}>
                <span>KA / VISUAL</span>
                <span>ARCHIVE 01</span>
              </div>
            </div>
          </article>

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

          {/* Scrap behind second image */}
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

            <div className={styles.photo}>
              <img
                src={bro2}
                alt="Kaeaou archived work two"
              />

              <div
                className={styles.photoOverlay}
                aria-hidden="true"
              />

              <div
                className={styles.photoCorner}
                aria-hidden="true"
              />

              <div
                className={styles.photoScan}
                aria-hidden="true"
              />
            </div>

            <div className={styles.caption}>
              <div className={styles.captionHeading}>
                <span className={styles.captionNumber}>02</span>

                <span className={styles.captionTitle}>
                  SECOND RECORD
                </span>

                <span className={styles.captionSymbol}>
                  ✦
                </span>
              </div>

              <div className={styles.captionMeta}>
                <span>KA / VISUAL</span>
                <span>ARCHIVE 02</span>
              </div>
            </div>
          </article>

          {/* Gallery bottom decoration */}
          {/* <div
            className={styles.galleryBottom}
            aria-hidden="true"
          >
            <span>✦</span>
            <div />
            <span>K</span>
            <div />
            <span>✦</span>
          </div> */}
        </section>

        {/* Bottom ornament */}
        <div
          className={styles.bottomOrnament}
          aria-hidden="true"
        >
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
            <div
              className={styles.footerBrandMark}
              aria-hidden="true"
            >
              ✦
            </div>

            <div>
              <h3>KAEAOU</h3>
              <p>PERSONAL VISUAL ARCHIVE</p>
            </div>
          </div>

          {/* Circular K logo */}
          <div
            className={styles.footerSeal}
            aria-hidden="true"
          >
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
            <span className={styles.footerSocialLabel}>
              FIND KAEAOU
            </span>

            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.tiktok.com/@kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>TikTok</span>
                <span>↗</span>
              </a>

              <a
                href="https://x.com/kaeaou"
                target="_blank"
                rel="noreferrer"
              >
                <span>X</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}