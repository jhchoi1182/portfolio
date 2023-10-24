import { useEffect } from "react";

const useInfiniteScroll = (
  setProjectArray: React.Dispatch<React.SetStateAction<projectCard[]>>,
  projectList: projectCard[],
  listRef: React.MutableRefObject<HTMLUListElement | null>,
) => {
  const setScroll = (addedElementHeight: number) => {
    window.scrollTo({
      top: window.scrollY + addedElementHeight,
      behavior: "instant",
    });
  };

  const moveScrollAfterAdd = () => {
    if (!listRef.current) return;
    const previousHeight = listRef.current.getBoundingClientRect().height;
    setProjectArray((prev) => [...prev, ...projectList]);

    setTimeout(() => {
      if (!listRef.current) return;
      const newHeight = listRef.current.getBoundingClientRect().height;
      setScroll(newHeight - previousHeight);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = (scrollTop + clientHeight) / totalHeight;

      if (scrollPosition > 0.2 && scrollPosition < 0.3) {
        moveScrollAfterAdd();
      } else if (scrollPosition >= 0.8) {
        setProjectArray((prev) => [...prev, ...projectList]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useInfiniteScroll;
