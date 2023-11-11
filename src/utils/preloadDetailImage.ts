const cachedImages = new Set();

const preloadDetailImage = (image: string) => {
  if (!cachedImages.has(image)) {
    const preLoadImg = new Image();
    preLoadImg.src = image;
    cachedImages.add(image);
  }
};

export default preloadDetailImage;
