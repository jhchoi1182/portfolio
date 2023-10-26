import "../css/animation.css";

function Front() {
  return (
    <div className="relative z-20">
      <span className="absolute top-5 -left-40 text-xl revealTextAfter2750ms">
        (I Am)
      </span>
      <div className="text-9xl slideToLeftAfter2500ms">Front</div>
    </div>
  );
}

export default Front;
