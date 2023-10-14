import "../css/animation.css";

function Front() {
  return (
    <div className="relative">
      <span className="absolute top-5 -left-40 text-xl revealTextAfter1250ms">
        (I Am)
      </span>
      <div className="text-9xl slideToLeftAfter1000ms">Front</div>
    </div>
  );
}

export default Front;
