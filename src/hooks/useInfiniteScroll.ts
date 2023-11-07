import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  setProjectArray: React.Dispatch<React.SetStateAction<projectCard[]>>,
  projectList: projectCard[],
  listRef: React.MutableRefObject<HTMLUListElement | null>,
) => {
  const isFetching = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportWidth = window.innerWidth;
      const scrollTop = document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = (scrollTop + clientHeight) / totalHeight;

      const isTopLoadZone =
        scrollPosition > 0.35 && scrollPosition < 0.4 && !isFetching.current;
      const isTopLoadZoneMobile =
        viewportWidth < 1000 &&
        scrollPosition > 0.2 &&
        scrollPosition < 0.25 &&
        !isFetching.current;
      const isBottomLoadZone = scrollPosition >= 0.8 && !isFetching.current;

      if (isTopLoadZoneMobile) {
        isFetching.current = true;
        moveScrollAfterAdd();
      }
      if (isTopLoadZone) {
        isFetching.current = true;
        moveScrollAfterAdd();
      }
      if (isBottomLoadZone) {
        setProjectArray((prev) => [...prev, ...projectList]);
        setTimeout(() => {
          isFetching.current = false;
        }, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveScrollAfterAdd = () => {
    if (!listRef.current) return;
    const previousHeight = listRef.current.getBoundingClientRect().height;
    setProjectArray((prev) => [...prev, ...projectList]);

    setTimeout(() => {
      if (!listRef.current) return;
      const newHeight = listRef.current.getBoundingClientRect().height;
      setScroll(newHeight - previousHeight);
      isFetching.current = false;
    }, 0);
  };
  const setScroll = (addedElementHeight: number) => {
    window.scrollTo({
      top: window.scrollY + addedElementHeight,
      behavior: "instant",
    });
  };
};

export default useInfiniteScroll;
