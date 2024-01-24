import "../css/animation.css";

function Full() {
  return (
    <div className="relative z-20">
      <span className="absolute top-2 -left-[60px] text-xs animate-revealTextAfter2750ms lg:text-xl lg:top-5 lg:-left-[220px] md:text-lg md:top-3 md:-left-[170px] sm:text-sm sm:-left-[150px]">
        (I Am)
      </span>
      <div className="text-4xl animate-slideToLeftAfter2500ms lg:text-9xl md:text-8xl sm:text-6xl">
        Full
      </div>
    </div>
  );
}

export default Full;
