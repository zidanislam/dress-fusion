import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    let hideItem = 299;

    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > hideItem) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {visible && (
        <div
          onClick={backToTop}
          className="flex align-middle justify-center relative cursor-pointer"
        >
          <ChevronUpIcon className="h-10 w-10 text-black border rounded-full border-black hover:bg-black hover:text-white lg:bottom-5 lg:right-5 2xl:bottom-10 2xl:right-10 fixed z-50" />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
