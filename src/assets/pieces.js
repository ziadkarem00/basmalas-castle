// Neo-Gothic SVG Chess Pieces
// Dark, ornate designs with flourishes

export const pieces = {
    // White pieces
    wK: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wKing" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <g fill="url(#wKing)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.5 11.63V6M20 8h5"/>
      <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="url(#wKing)" stroke-linecap="butt"/>
      <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/>
      <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/>
    </g>
  </svg>`,
    wQ: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wQueen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <g fill="url(#wQueen)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="12" r="2.75"/>
      <circle cx="14" cy="9" r="2.75"/>
      <circle cx="22.5" cy="8" r="2.75"/>
      <circle cx="31" cy="9" r="2.75"/>
      <circle cx="39" cy="12" r="2.75"/>
      <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-3.5-14.5-5 13.5-5-13.5L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/>
      <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/>
      <path d="M11 38.5a35 35 1 0023 0" fill="none" stroke-linecap="butt"/>
      <path d="M11 29a35 35 1 0123 0M12.5 31.5h20M11.5 34.5a35 35 1 0022 0M10.5 37.5a35 35 1 0024 0" fill="none"/>
    </g>
  </svg>`,
    wR: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wRook" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <g fill="url(#wRook)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/>
      <path d="M34 14l-3 3H14l-3-3"/>
      <path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/>
      <path d="M11 14h23" fill="none" stroke-linejoin="miter"/>
    </g>
  </svg>`,
    wB: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wBishop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <g fill="url(#wBishop)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <g fill="none">
        <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/>
        <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
        <path d="M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"/>
      </g>
      <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none"/>
    </g>
  </svg>`,
    wN: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wKnight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <g fill="url(#wKnight)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
      <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/>
      <path d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0zm5.433-9.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z" stroke="none" fill="#2D033B"/>
    </g>
  </svg>`,
    wP: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wPawn" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff"/>
        <stop offset="100%" style="stop-color:#d4b08c"/>
      </linearGradient>
    </defs>
    <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#wPawn)" stroke="#2D033B" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

    // Black pieces
    bK: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bKing" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <g fill="url(#bKing)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.5 11.63V6" stroke-linejoin="miter"/>
      <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="url(#bKing)" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/>
      <path d="M20 8h5" stroke-linejoin="miter"/>
      <path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9" stroke="#F1B4BB" stroke-width="1"/>
      <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/>
    </g>
  </svg>`,
    bQ: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bQueen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <g fill="url(#bQueen)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="12" r="2.75" stroke="none"/>
      <circle cx="14" cy="9" r="2.75" stroke="none"/>
      <circle cx="22.5" cy="8" r="2.75" stroke="none"/>
      <circle cx="31" cy="9" r="2.75" stroke="none"/>
      <circle cx="39" cy="12" r="2.75" stroke="none"/>
      <circle cx="6" cy="12" r="2.75" fill="none"/>
      <circle cx="14" cy="9" r="2.75" fill="none"/>
      <circle cx="22.5" cy="8" r="2.75" fill="none"/>
      <circle cx="31" cy="9" r="2.75" fill="none"/>
      <circle cx="39" cy="12" r="2.75" fill="none"/>
      <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-3.5-14.5-5 13.5-5-13.5L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/>
      <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/>
      <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
    </g>
  </svg>`,
    bR: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bRook" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <g fill="url(#bRook)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z" stroke-linecap="butt"/>
      <path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/>
      <path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#F1B4BB" stroke-width="1" stroke-linejoin="miter"/>
    </g>
  </svg>`,
    bB: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bBishop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <g fill="url(#bBishop)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/>
      <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
      <circle cx="22.5" cy="8" r="2.5"/>
      <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none" stroke="#F1B4BB"/>
    </g>
  </svg>`,
    bN: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bKnight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <g fill="url(#bKnight)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
      <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/>
      <path d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0zm5.433-9.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z" stroke="none" fill="#F1B4BB"/>
    </g>
  </svg>`,
    bP: `<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bPawn" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#4a1942"/>
        <stop offset="100%" style="stop-color:#2D033B"/>
      </linearGradient>
    </defs>
    <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#bPawn)" stroke="#F1B4BB" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
}

export function getPieceSVG(piece) {
    if (!piece) return null
    const key = `${piece.color}${piece.type.toUpperCase()}`
    return pieces[key] || null
}
