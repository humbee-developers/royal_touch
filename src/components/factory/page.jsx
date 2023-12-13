"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/factory/factory.css"

gsap.registerPlugin(ScrollTrigger);
const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);

    function files(index) {
      var data = `
      ../image/20000.jpg
      ./image/20001.jpg
      ./image/20002.jpg
      ./image/20003.jpg
      ./image/20004.jpg
      ./image/20005.jpg
      ./image/20006.jpg
      ./image/20007.jpg
      ./image/20008.jpg
      ./image/20009.jpg
      ./image/20010.jpg
      ./image/20011.jpg
      ./image/20012.jpg
      ./image/20013.jpg
      ./image/20014.jpg
      ./image/20015.jpg
      ./image/20016.jpg
      ./image/20017.jpg
      ./image/20018.jpg
      ./image/20019.jpg
      ./image/20020.jpg
      ./image/20021.jpg
      ./image/20022.jpg
      ./image/20023.jpg
      ./image/20024.jpg
      ./image/20025.jpg
      ./image/20026.jpg
      ./image/20027.jpg
      ./image/20028.jpg
      ./image/20029.jpg
      ./image/20030.jpg
      ./image/20031.jpg
      ./image/20032.jpg
      ./image/20033.jpg
      ./image/20034.jpg
      ./image/20035.jpg
      ./image/20036.jpg
      ./image/20037.jpg
      ./image/20038.jpg
      ./image/20039.jpg
      ./image/20040.jpg
      ./image/20041.jpg
      ./image/20042.jpg
      ./image/20043.jpg
      ./image/20044.jpg
      ./image/20045.jpg
      ./image/20046.jpg
      ./image/20047.jpg
      ./image/20048.jpg
      ./image/20049.jpg
      ./image/20050.jpg
      ./image/20051.jpg
      ./image/20052.jpg
      ./image/20053.jpg
      ./image/20054.jpg
      ./image/20055.jpg
     `;
      return data.split("\n")[index];
    }

    const frameCount = 56;
    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.5,
        trigger: '#page3',
        start: 'top top',
        end: '250% top',
      //   scroller: '#main',
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
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
    }

    ScrollTrigger.create({
      trigger: '#page3',
      pin: true,
      // scroller: '#main',
      start: 'top top',
      end: '250% top',
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="page3"></canvas>;
};

export default CanvasComponent;
