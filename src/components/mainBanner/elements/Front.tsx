import "../css/animation.css";

function Front() {
  return (
    <div className="relative z-20">
      <span className="absolute top-2 -left-[60px] text-xs revealTextAfter2750ms lg:text-xl lg:top-5 lg:-left-40 md:text-lg md:top-3 md:-left-[150px] sm:text-sm sm:-left-[135px]">
        (I Am)
      </span>
      <div className="text-4xl slideToLeftAfter2500ms lg:text-9xl md:text-8xl sm:text-6xl">
        Front
      </div>
    </div>
  );
}

export default Front;
