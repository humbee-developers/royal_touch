"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import big_arrow from '@/images/bigarrow.svg';
import Link from 'next/link';
import Navbar from '@/components/navbar/index';
import styles from '@/app/product/product2.module.css';
import { gsap } from 'gsap';

const Page = () => {
  const plywoodRef = useRef(null);
  const blockboardRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.set([plywoodRef.current, blockboardRef.current, arrowRef.current], { opacity: 0, scale: 1 });

    tl.to(plywoodRef.current, { opacity: 1, scale: 1, duration: 1, delay: 0.5 })
      .to(blockboardRef.current, { opacity: 1, scale: 1, duration: 1 }, '-=0.5')
      .to(arrowRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5');
  }, []);

  const handleImageHover = (ref) => {
    gsap.to(ref, { scale: 1.1, duration: 0.3 });
  };

  const handleImageLeave = (ref) => {
    gsap.to(ref, { scale: 1, duration: 0.3 });
  };

  return (
    <>
      <div className={styles.ply_bock}>
        <Navbar />
        <div className={styles.ply_side1}>
          <div className={styles.plywood} ref={plywoodRef}>
            <h2 className={styles.plywood_title}>Plywood</h2>
            <p className={styles.plywood_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
            </p>
          </div>
          <div className={styles.big_arrow_outer}>
            <Link href="product/plywood">
              <div
                ref={(el) => {
                  plywoodRef.current = el;
                  arrowRef.current = el; // assign arrowRef to the same element
                }}
                onMouseEnter={() => handleImageHover(arrowRef.current)}
                onMouseLeave={() => handleImageLeave(arrowRef.current)}
              >
                <Image src={big_arrow} alt="arrow" className={styles.big_arrow} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.block_side2}>
          <div className={styles.blockboard} ref={blockboardRef}>
            <h2 className={styles.blockboard_title}>Blockboard</h2>
            <p className={styles.blockboard_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
            </p>
          </div>
          <div className={styles.big_arrow_outer}>
            <Link href="/product/blockwood">
              <div
                ref={(el) => (blockboardRef.current = el)}
                onMouseEnter={() => handleImageHover(blockboardRef.current)}
                onMouseLeave={() => handleImageLeave(blockboardRef.current)}
              >
                <Image src={big_arrow} alt="arrow" className={styles.big_arrow} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
