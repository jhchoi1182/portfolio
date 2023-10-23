import "../css/animation.css";

function Loading() {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white overflow-hidden">
      {/* <div className="absolute top-1/2 left-1/2 w-[110%] h-full overflow-hidden loading">
        <hr className="bg-[#b2bec3] topLineScaling" />
        <hr className="bg-[#2d3436] bottomLineScaling" />
      </div> */}
      <div className="absolute top-1/2 left-1/2 w-[110%] h-full overflow-hidden loading">
        <hr className="bg-[#2d3436] topLineScalingAfter2000ms" />
        <hr className="bg-[#b2bec3] bottomLineScalingAfter2000ms" />
      </div>
    </div>
  );
}

export default Loading;
