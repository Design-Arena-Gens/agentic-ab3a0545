import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A Cow on a Mountain</title>
        <meta name="description" content="A tranquil, animated illustration of a cow standing proudly on a mountain ridge." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <section>
          <h1 className="title">A Cow on a Mountain</h1>
          <p className="subtitle">A calm alpine scene rendered in SVG</p>

          <div className="scene" aria-label="Illustration: cow on a mountain at dusk">
            <span className="badge">SVG ? responsive ? lightweight</span>

            {/* SVG scene */}
            <svg viewBox="0 0 1600 900" width="100%" height="100%" role="img" aria-labelledby="title desc">
              <title id="title">Cow on a mountain at dusk</title>
              <desc id="desc">An animated SVG of layered mountains, the setting sun, drifting clouds, and a small cow on a ridge.</desc>

              {/* Sky gradient */}
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3a4fa3" />
                  <stop offset="55%" stopColor="#1f2b68" />
                  <stop offset="100%" stopColor="#0f1638" />
                </linearGradient>
                <linearGradient id="snow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#cfe6ff" />
                </linearGradient>
                <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffd166" />
                  <stop offset="100%" stopColor="#ff9f1c" />
                </linearGradient>
                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.35" />
                </filter>
              </defs>

              <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />

              {/* Sun and glow */}
              <g>
                <circle cx="1240" cy="190" r="70" fill="url(#sunGrad)" />
                <circle className="sun-glow" cx="1240" cy="190" r="130" fill="#ffd166" opacity="0.45" />
              </g>

              {/* Distant mountains */}
              <g opacity="0.55">
                <path d="M0 560 L220 380 L380 520 L520 420 L760 600 L1000 440 L1260 580 L1600 420 L1600 900 L0 900 Z" fill="#2a366e" />
              </g>

              {/* Mid mountains */}
              <g opacity="0.85">
                <path d="M0 650 L180 520 L320 600 L520 520 L760 700 L1000 560 L1240 640 L1600 520 L1600 900 L0 900 Z" fill="#1a255a" />
              </g>

              {/* Foreground ridge */}
              <g>
                <path d="M0 740 L120 700 L260 720 L440 680 L680 730 L860 700 L1000 720 L1180 700 L1400 710 L1600 690 L1600 900 L0 900 Z" fill="#0e153a" />
              </g>

              {/* Snow caps */}
              <g opacity="0.95">
                <path d="M220 380 L260 430 L300 410 L320 430 L360 410 L380 520 L220 380 Z" fill="url(#snow)" />
                <path d="M1000 440 L1060 500 L1100 480 L1170 520 L1260 580 L1000 440 Z" fill="url(#snow)" />
              </g>

              {/* Clouds */}
              <g fill="#ffffff" opacity="0.9">
                <g className="cloud slow" transform="translate(180 150)">
                  <ellipse cx="0" cy="0" rx="60" ry="28" />
                  <ellipse cx="48" cy="-10" rx="48" ry="24" />
                  <ellipse cx="-42" cy="-6" rx="40" ry="20" />
                </g>
                <g className="cloud fast" transform="translate(880 120)">
                  <ellipse cx="0" cy="0" rx="46" ry="22" />
                  <ellipse cx="34" cy="-10" rx="36" ry="18" />
                  <ellipse cx="-30" cy="-8" rx="30" ry="16" />
                </g>
                <g className="cloud" transform="translate(1320 240)">
                  <ellipse cx="0" cy="0" rx="52" ry="24" />
                  <ellipse cx="38" cy="-8" rx="36" ry="18" />
                  <ellipse cx="-34" cy="-6" rx="30" ry="15" />
                </g>
              </g>

              {/* Cow on ridge */}
              <g className="cow" transform="translate(1040 640)">
                {/* Body */}
                <ellipse cx="0" cy="0" rx="60" ry="36" fill="#ffffff" />
                {/* Spots */}
                <ellipse cx="-14" cy="-4" rx="14" ry="10" fill="#222" />
                <ellipse cx="18" cy="6" rx="10" ry="8" fill="#222" />
                {/* Head */}
                <ellipse cx="-70" cy="-6" rx="20" ry="18" fill="#ffffff" />
                <circle cx="-76" cy="-10" r="2.8" fill="#222" />
                <circle cx="-64" cy="-8" r="2.8" fill="#222" />
                {/* Ears */}
                <ellipse cx="-84" cy="-18" rx="6" ry="5" fill="#ffffff" />
                <ellipse cx="-58" cy="-18" rx="6" ry="5" fill="#ffffff" />
                {/* Muzzle */}
                <ellipse cx="-72" cy="6" rx="12" ry="8" fill="#ffb3a7" />
                {/* Horns */}
                <path d="M-86 -22 Q -92 -34 -84 -32" stroke="#f8e6c8" strokeWidth="4" fill="none" />
                <path d="M-54 -22 Q -48 -34 -56 -32" stroke="#f8e6c8" strokeWidth="4" fill="none" />
                {/* Legs */}
                <rect x="-24" y="24" width="6" height="22" rx="2" fill="#ffffff" />
                <rect x="-4" y="24" width="6" height="22" rx="2" fill="#ffffff" />
                <rect x="16" y="24" width="6" height="22" rx="2" fill="#ffffff" />
                <rect x="36" y="24" width="6" height="22" rx="2" fill="#ffffff" />
                <rect x="-24" y="44" width="6" height="6" rx="2" fill="#222" />
                <rect x="-4" y="44" width="6" height="6" rx="2" fill="#222" />
                <rect x="16" y="44" width="6" height="6" rx="2" fill="#222" />
                <rect x="36" y="44" width="6" height="6" rx="2" fill="#222" />
                {/* Tail */}
                <path d="M52 -10 q18 16 0 28" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
              </g>

              {/* Foreground grass tufts for depth */}
              <g opacity="0.65" fill="#11204a">
                <path d="M120 780 q8 -18 16 0 q8 -18 16 0 q8 -18 16 0" />
                <path d="M360 765 q6 -14 12 0 q6 -14 12 0 q6 -14 12 0" />
                <path d="M760 775 q6 -14 12 0 q6 -14 12 0 q6 -14 12 0" />
                <path d="M1320 770 q6 -14 12 0 q6 -14 12 0 q6 -14 12 0" />
              </g>
            </svg>
          </div>
        </section>
      </main>

      <footer className="footer">
        Built for Vercel ? Next.js ? SVG Art
      </footer>
    </div>
  );
}
