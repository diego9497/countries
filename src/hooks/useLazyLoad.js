import { useEffect, useState, useRef } from "react";

const useLazyLoad = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(
        function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "0px 0px 600px 0px",
        }
      );
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};

export default useLazyLoad;
