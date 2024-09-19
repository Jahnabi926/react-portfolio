import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (duration = 1000) => {
  useEffect(() => {
    AOS.init({ duration });
  }, [duration]);
};

export default useAOS;
