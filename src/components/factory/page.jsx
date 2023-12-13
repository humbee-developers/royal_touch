"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./factory.css";

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
          ./20000.jpg
          ./20001.jpg
          ./20002.jpg
          ./20003.jpg
          ./20004.jpg
          ./20005.jpg
          ./20006.jpg
          ./20007.jpg
          ./20008.jpg
          ./20009.jpg
          ./20010.jpg
          ./20011.jpg
          ./20012.jpg
          ./20013.jpg
          ./20014.jpg
          ./20015.jpg
          ./20016.jpg
          ./20017.jpg
          ./20018.jpg
          ./20019.jpg
          ./20020.jpg
          ./20021.jpg
          ./20022.jpg
          ./20023.jpg
          ./20024.jpg
          ./20025.jpg
          ./20026.jpg
          ./20027.jpg
          ./20028.jpg
          ./20029.jpg
          ./20030.jpg
          ./20031.jpg
          ./20032.jpg
          ./20033.jpg
          ./20034.jpg
          ./20035.jpg
          ./20036.jpg
          ./20037.jpg
          ./20038.jpg
          ./20039.jpg
          ./20040.jpg
          ./20041.jpg
          ./20042.jpg
          ./20043.jpg
          ./20044.jpg
          ./20045.jpg
          ./20046.jpg
          ./20047.jpg
          ./20048.jpg
          ./20049.jpg
          ./20050.jpg
          ./20051.jpg
          ./20052.jpg
          ./20053.jpg
          ./20054.jpg
          ./20055.jpg
          `.trim().split('\n');
          
    
          const promises = files.map((file) => loadImage(file));
          return Promise.all(promises);
        };

        const frameCount = 56;
    

        
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
        };
    
        // Main canvas initialization
        const initCanvas = async () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
    
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
    
          // Load images
          const images = await loadImages();
    
          // Initialize GSAP animation
          const imageSeq = { frame: 1 };
    
          gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
              scrub: 0.5,
              trigger: '#page3',
              pin: true,
              // pinSpacing:0,
              
              start: `top`,
              end: `+=${window.innerHeight / 1}`,
             
            //   scroller: '#main',
            },
            onUpdate: () => render(images, imageSeq.frame, context),
          });
    
          // Call render function once images are loaded
          render(images, imageSeq.frame, context);
    
          // Initialize ScrollTrigger
          // ScrollTrigger.create({
          //   trigger: '#page3',
          //   pin: true,
          //   // scroller: '#main',
          //   start: `top `,
          //   end: `+=${window.innerHeight / 1}`,
          //   markers: true,
          //   // markers: true,
          // });
        };
    
        // Function to render the canvas
        const render = (images, frame, context) => {
          scaleImage(images[frame], context);
        };
    
        // Call the main canvas initialization function
        initCanvas();
      }, []); // Empty dependency array to run useEffect only once on component mount
    
      return (
          <div className='z'>

<div id="page3">
                  <canvas ref={canvasRef} ></canvas>
            </div>
          </div>
      )
    }
    
    export default CanvasComponent;