import React from "react";

// optional: replace with a local import if you prefer
// import heroImg from "../assets/hero-curve.png";

const Marker = ({ top, left, labelTitle, labelSubtitle, labelRight }) => {
  return (
    <>
      {/* marker bubble */}
      <div
        className="absolute w-12 h-12 rounded-full bg-white  flex items-center justify-center ring-4 ring-white"
        style={{
          top,
          left,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-4 h-4 rounded-full" style={{ background: "#16A34A" }} />
      </div>

      {/* label box (title + subtitle) */}
      <div
        className="absolute font-semibold text-black max-w-xs bg-white/80 backdrop-blur-md rounded-md px-3 py-2 "
        style={{
          top: `calc(${top} + 2.6rem)`,
          left,
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div className="text-lg lg:text-xl">{labelTitle}</div>
        {labelSubtitle && <div className="text-sm font-normal mt-1 text-gray-600">{labelSubtitle}</div>}
      </div>

      {/* optional right big label (for top-right marker in screenshot) */}
      {labelRight && (
        <div
          className="absolute font-extrabold text-3xl lg:text-4xl text-green-700"
          style={{
            top: `calc(${top} - 1.2rem)`,
            left: `calc(${left} + 11rem)`,
            transform: "translateY(-50%)",
          }}
        >
          {labelRight}
        </div>
      )}
    </>
  );
};

const HeroCurve = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50">
      <div className=" px-6 lg:px-12 ">
        <div className="relative bg-white rounded-2xl overflow-visible " style={{ minHeight: 520 }}>
          {/* Left heading */}
          <div className="absolute top-6 left-6 lg:left-12 lg:top-12 z-30 ">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Grow your Financial Business with <span className="text-green-600">Glucks Wealth</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 font-medium">From Scratch to Sky — increase AUM, customers, and retention.</p>

           

            <p className="mt-4 text-sm text-gray-500">Trusted by advisors and businesses across India.</p>
          </div>

          {/* optional decorative circle image on left (uncomment import if you use local) */}
          {/* <img src={heroImg} alt="hero" className="absolute left-6 bottom-6 w-48 opacity-90 rounded-lg " /> */}

          {/* SVG curve (green rising chart) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            {/* subtle grid lines */}
            <g opacity="0.08" stroke="#16A34A" strokeWidth="1">
              <line x1="0" y1="420" x2="1200" y2="420" />
              <line x1="0" y1="320" x2="1200" y2="320" />
              <line x1="0" y1="220" x2="1200" y2="220" />
            </g>

            {/* faint area under curve */}
            <path
              d="M40 460 C160 420, 300 360, 420 320 C560 280, 720 230, 860 200 C980 180, 1100 140, 1160 110 L1160 520 L40 520 Z"
              fill="url(#g1)"
              opacity="0.08"
            />

            {/* main rising curve */}
            <path
              id="rising"
              d="M40 460 C160 420, 300 360, 420 320 C560 280, 720 230, 860 200 C980 180, 1100 140, 1160 110"
              fill="none"
              stroke="url(#g1)"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ strokeDasharray: 3000, strokeDashoffset: 0, transition: 'stroke-dashoffset 1.8s ease-out' }}
            />

            


          </svg>

          {/* Markers + labels - positions are percentages; tweak to perfect */}
          <Marker top="85%" left="12%" labelTitle="No. of Customers" />

          <Marker top="58%" left="42%" labelTitle="Investment" labelSubtitle="Per Customer" />

          <Marker top="32%" left="76%" labelTitle="Customer" labelSubtitle="Retention %" />

          {/* small legend */}
          <div className="absolute right-6 bottom-6 text-sm text-gray-600 bg-white/90 rounded-md px-3 py-2 mr-40">
            <div className="flex items-center gap-2 ">
              <span className="w-3 h-3 rounded-full" style={{ background: '#059669' }} />
              <span>Increasing AUM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCurve;
