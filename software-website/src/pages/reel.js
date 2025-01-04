import React, { useEffect } from "react";

function isClient() {
  return typeof window === "object";
}

const Reel = () => {
  useEffect(() => {
    if (isClient()) {
      window.location.href = "https://vimeo.com/823151596";
    }
  }, []);

  return <></>;
};

export default Reel;
