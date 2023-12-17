"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./layer.css";

gsap.registerPlugin(ScrollTrigger);
const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Function to load images and return a Promise
    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });

    // Function to load all images
    const loadImages = async () => {
      const files = `
          ./SEQ1 SHORTENED00.jpg
          ./SEQ1 SHORTENED01.jpg
          ./SEQ1 SHORTENED02.jpg
          ./SEQ1 SHORTENED03.jpg
          ./SEQ1 SHORTENED04.jpg
             ./SEQ1 SHORTENED05.jpg
             ./SEQ1 SHORTENED06.jpg
             ./SEQ1 SHORTENED07.jpg
             ./SEQ1 SHORTENED08.jpg
             ./SEQ1 SHORTENED09.jpg
             ./SEQ1 SHORTENED10.jpg
             ./SEQ1 SHORTENED11.jpg
             ./SEQ1 SHORTENED12.jpg
             ./SEQ1 SHORTENED13.jpg
             ./SEQ1 SHORTENED14.jpg
             ./SEQ1 SHORTENED15.jpg
             ./SEQ1 SHORTENED16.jpg
             ./SEQ1 SHORTENED17.jpg
             ./SEQ1 SHORTENED18.jpg
             ./SEQ1 SHORTENED19.jpg
             ./SEQ1 SHORTENED20.jpg
             ./SEQ1 SHORTENED21.jpg
             ./SEQ1 SHORTENED22.jpg
             ./SEQ1 SHORTENED23.jpg
             ./SEQ1 SHORTENED24.jpg
             ./SEQ1 SHORTENED25.jpg
             ./SEQ1 SHORTENED26.jpg
             ./SEQ1 SHORTENED27.jpg
             ./SEQ1 SHORTENED28.jpg
             ./SEQ1 SHORTENED29.jpg
             ./SEQ1 SHORTENED30.jpg
             ./SEQ1 SHORTENED31.jpg
             ./SEQ1 SHORTENED32.jpg
             ./SEQ1 SHORTENED33.jpg
             ./SEQ1 SHORTENED34.jpg
             ./SEQ1 SHORTENED35.jpg
             ./SEQ1 SHORTENED36.jpg
             ./SEQ1 SHORTENED37.jpg
             ./SEQ1 SHORTENED38.jpg
             ./SEQ1 SHORTENED39.jpg
             ./SEQ1 SHORTENED40.jpg
             ./SEQ1 SHORTENED41.jpg
             ./SEQ1 SHORTENED42.jpg
             ./SEQ1 SHORTENED43.jpg
             ./SEQ1 SHORTENED44.jpg
             ./SEQ1 SHORTENED45.jpg
             ./SEQ1 SHORTENED46.jpg
             ./SEQ1 SHORTENED47.jpg
             ./SEQ1 SHORTENED48.jpg
             ./SEQ1 SHORTENED49.jpg
             ./SEQ1 SHORTENED50.jpg
             ./SEQ1 SHORTENED51.jpg
             ./SEQ1 SHORTENED52.jpg
             ./SEQ1 SHORTENED53.jpg
             ./SEQ1 SHORTENED54.jpg
             ./SEQ1 SHORTENED55.jpg
             ./SEQ1 SHORTENED56.jpg
             ./SEQ1 SHORTENED57.jpg
             ./SEQ1 SHORTENED58.jpg
             ./SEQ1 SHORTENED59.jpg
             ./SEQ1 SHORTENED60.jpg
             ./SEQ1 SHORTENED61.jpg
             ./SEQ1 SHORTENED62.jpg
             ./SEQ1 SHORTENED63.jpg
             ./SEQ1 SHORTENED64.jpg
             ./SEQ1 SHORTENED65.jpg
             ./SEQ1 SHORTENED66.jpg
             ./SEQ1 SHORTENED67.jpg
             ./SEQ1 SHORTENED68.jpg
             ./SEQ1 SHORTENED69.jpg
             ./SEQ1 SHORTENED70.jpg
             ./SEQ1 SHORTENED71.jpg
             ./SEQ1 SHORTENED72.jpg
             ./SEQ1 SHORTENED73.jpg
             ./SEQ1 SHORTENED74.jpg
             ./SEQ1 SHORTENED75.jpg
             ./SEQ1 SHORTENED76.jpg
             ./SEQ1 SHORTENED77.jpg
             ./SEQ1 SHORTENED78.jpg
             ./SEQ1 SHORTENED79.jpg
             ./SEQ1 SHORTENED80.jpg
             ./SEQ1 SHORTENED81.jpg
             ./SEQ1 SHORTENED82.jpg
             ./SEQ1 SHORTENED83.jpg
             ./SEQ1 SHORTENED84.jpg
          `
        .trim()
        .split("\n");

      const promises = files.map((file) => loadImage(file));
      return Promise.all(promises);
    };

    const frameCount = 85;

    // Function to scale and draw the image on the canvas
    const scaleImage = (img, ctx) => {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );

      console.log("Canvas Dimensions:", canvas.width, canvas.height);
      console.log("Image Dimensions:", img.width, img.height);
      console.log("Calculated Ratio:", ratio);
    };

    // Main canvas initialization
    const initCanvas = async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Load images
      const images = await loadImages();

      // Initialize GSAP animation
      const imageSeq = { frame: 1 };

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
      //     markers: true,
          scrub: true,
          trigger: "#page4",
          //     pin:"#page4",
          // pinSpacing:false,
          // pin:true,
          // trigger: `#page3`,
          start: `top top`,
          // end: "100%",
          // end: `150% center`,

          // start: `top top`,
          // end: () => '+=' + innerWidth * sections.length,
          // scroller: `#main`,
        },
        onUpdate: () => render(images, imageSeq.frame, context),
      });
      render(images, imageSeq.frame, context);

      // Initialize ScrollTrigger
      // ScrollTrigger.create({
      //   trigger: '#page4',
      //   pin: true,
      //   // scroller: '#main',
      //   start: `top top`,
      //   end: `150% center`,
      //   markers: true,
      //   // markers: true,
      // });
    };

    // Function to render the canvas
    const render = (images, frame, context) => {
      scaleImage(images[frame], context);
    };

    initCanvas();
  }, []);

  return (
    <div className="z1">
      <div id="page4">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default CanvasComponent;
