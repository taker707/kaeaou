import { useEffect, useRef } from "react";
import styles from "../styles/CustomCursor.module.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const checkHover = (e) => {
      const target = e.target.closest(
        "a, button, img, [role='button']"
      );

      cursor.classList.toggle(
        styles.hovering,
        Boolean(target)
      );
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
      `;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.cursor}
      aria-hidden="true"
    >
      <svg
        className={styles.cursorSvg}
        viewBox="0 0 120 195"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main outer cursor */}

        <path
          className={styles.cursorOutline}
          d="
            M 8 5

            C 6 2
              8 1
              11 6

            C 25 30
              43 56
              62 77

            C 76 92
              91 105
              108 117

            C 114 121
              116 126
              109 125

            C 92 123
              76 118
              61 111

            C 56 109
              53 111
              55 116

            L 73 151

            C 75 155
              74 158
              70 159

            L 54 164

            C 51 165
              49 163
              47 159

            L 36 132

            C 34 127
              31 126
              29 131

            L 18 158

            C 16 163
              13 164
              12 159

            C 10 139
              11 115
              12 94

            C 13 67
              12 39
              8 5

            Z
          "
        />

        {/* Inner sweeping line */}

        <path
          className={styles.innerLine}
          d="
            M 16 18

            C 25 47
              36 70
              51 88

            C 62 101
              76 111
              94 117
          "
        />

        {/* Lower inner curve */}

        <path
          className={styles.lowerLine}
          d="
            M 34 105

            C 39 119
              47 134
              57 150
          "
        />

        {/* Small pointed flourish */}

        <path
          className={styles.flourish}
          d="
            M 29 131

            C 27 141
              24 150
              19 158
          "
        />
      </svg>
    </div>
  );
}

export default CustomCursor;