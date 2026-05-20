import "./FishLoader.css";

export default function FishLoader() {
  return (
    <div className="fish-loader-wrapper">

      {/* AREA IKAN */}
      <div className="fish-track">

        {/* IKAN */}
        <div className="fish">

          {/* MATA */}
          <div className="fish-eye"></div>

          {/* MULUT */}
          <div className="fish-mouth"></div>

          {/* EKOR */}
          <div className="fish-tail"></div>

          {/* SIRIP */}
          <div className="fish-fin-top"></div>
          <div className="fish-fin-bottom"></div>
          <div className="fish-fin-side"></div>

        </div>
      </div>

      {/* LOADING BAR */}
      <div className="loading-bar">
        <div className="loading-fill"></div>
      </div>

      {/* TEXT */}
      <p className="loading-text">
        Loading RISQUATIC...
      </p>

    </div>
  );
}