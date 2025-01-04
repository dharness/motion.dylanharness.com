import React, { useEffect } from "react";

const AutoplayVideo = () => {
  console.log("AutoplayVideo");
  useEffect(() => {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    console.log("isSafari", isSafari);
    if (isSafari) {
      var gifsForFallback = document.querySelectorAll(".gif-fallback__gif");

      gifsForFallback.forEach((g) => {
        var video = document.getElementById(g.id + "__video");
        if (video && video.style) {
          video.style.display = "none";
          g.style.removeProperty("display");
        }
      });
    }
  }, []);

  return <></>;
};

export default AutoplayVideo;
