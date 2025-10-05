import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import tyre from "../images/tyre.png";

const NotFound: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const busContainerRef = useRef<HTMLDivElement | null>(null);
  const busRef = useRef<HTMLImageElement | null>(null);
  const tyre1Ref = useRef<HTMLImageElement | null>(null);
  const tyre2Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Animate text
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      duration: 1,
      y: -80,
      opacity: 1,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          duration: 1,
          y: 20,
          opacity: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        busRef.current,
        {
          duration: 1,
          scale: 0.8,
          opacity: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

    // Infinite tyre rotation
    gsap.to([tyre1Ref.current, tyre2Ref.current], {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear",
      transformOrigin: "center center",
    });

    // Move bus left → right → left fully visible using vw
    const busWidth = busRef.current?.offsetWidth || 300;
    const paddingVw = (busWidth / window.innerWidth) * 100; // convert px to vw

    gsap.fromTo(
      busContainerRef.current,
      { x: -80 },                     // start at left edge
      {
        x: 130 - paddingVw,         // move to right edge fully visible
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,                  // reverse back
      }
    );
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "3rem",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden", // prevent scrollbars
      }}
    >
      {/* 🚌 Moving Bus (GIF + Tyres) */}
      <div
        ref={busContainerRef}
        style={{
          position: "relative",
          display: "inline-block",
          marginTop: "2rem",
        }}
      >
        {/* Bus Body (GIF) */}
        <img
          ref={busRef}
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="Bus Body"
          style={{
            width: "300px",
            maxWidth: "100%",
            borderRadius: "12px",
            display: "block",
          }}
        />

        {/* Tyres under the bus */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "230px",
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            ref={tyre1Ref}
            src={tyre}
            alt="Tyre 1"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
          <img
            ref={tyre2Ref}
            src={tyre}
            alt="Tyre 2"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* 404 Text */}
      <h1
        ref={titleRef}
        style={{
          background: "darkgreen",
          fontSize: "3rem",
          fontWeight: "600",
          marginTop: "6rem",
          marginBottom: "1rem",
          color: "#0ef0a5",
          borderRadius: "10px",
        }}
      >
        - Page Not Found...
      </h1>
      <p
        ref={textRef}
        style={{
          fontSize: "1.25rem",
          marginBottom: "2rem",
        }}
      >
       Sorry, the page you’re looking for doesn’t exist.
      </p>
    </div>
  );
};

export default NotFound;
