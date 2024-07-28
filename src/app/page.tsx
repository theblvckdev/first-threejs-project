"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Home = () => {
  // implement gsap.to() method
  useGSAP(() => {
    gsap.to("#box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);

  // implementing gsap.from() method
  useGSAP(() => {
    gsap.from("#box-2", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  // implementing gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo(
      "#box-3",
      {
        x: 0,
        rotate: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotate: 360,
        borderRadius: "100%",
        duration: 2,
        ease: "bounce.out",
      }
    );
  }, []);

  // implementing gsap timeline
  let timeline = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });

  useGSAP(() => {
    timeline.to("#dot-1", {
      x: 250,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#dot-1", {
      y: 100,
      scale: 2,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#dot-1", {
      x: 500,
      scale: 1,
      rotate: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  return (
    <>
      <div className="p-5 min-h-screen h-full w-screen">
        <div id="box" className="h-20 w-20 rounded-lg bg-indigo-600"></div>
        <div
          id="box-2"
          className="h-20 mt-10 w-20 rounded-lg bg-indigo-600"
        ></div>
        <div
          id="box-3"
          className="h-20 mt-10 w-20 rounded-lg bg-indigo-600"
        ></div>

        <button
          onClick={() => {
            timeline.paused() ? timeline.play() : timeline.pause();
          }}
          className="py-3 px-5 rounded-lg bg-indigo-500 outline-none text-white"
        >
          Pause / Play
        </button>
        <div
          id="dot-1"
          className="h-10 mt-5 w-10 bg-green-500 rounded-lg"
        ></div>
      </div>
    </>
  );
};

export default Home;
