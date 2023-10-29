import "../css/animation.css";

function Front() {
  return (
    <div className="relative z-20">
      <span className="absolute top-2 -left-[135px] text-sm revealTextAfter2750ms lg:text-xl lg:top-5 lg:-left-40 md:text-lg md:top-3 md:-left-[150px]">
        (I Am)
      </span>
      <div className="text-6xl slideToLeftAfter2500ms lg:text-9xl md:text-8xl">
        Front
      </div>
    </div>
  );
}

export default Front;
