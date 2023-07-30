import { useEffect, useState } from "react";

const useScreenType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMonitor, setIsMonitor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLaptop(window.innerWidth >= 768);
      setIsMonitor(window.innerWidth >= 1600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isMobile, isLaptop, isMonitor };
};

export default useScreenType;
