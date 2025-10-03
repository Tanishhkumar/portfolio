import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate heading
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        x: -400,
        opacity: 1,
        duration: 6,
        ease: "power3.out",
        scrollTrigger: { 
          scrub:1,
          
          start:"top 0%",
          end:"top -100%"
        }
        
      });
    }

    // Animate each section inside
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.2,
        ease: "power2.out",
      
        
        scrollTrigger: {
          trigger: el,
          start: "top 20%",
          toggleActions: "play none none reverse",
          
          
        },
      });
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="experience p-6 max-w-3xl mx-auto bg-black"
    >
      {/* Top Heading */}
      <div className="flex items-center space-x-2 mt-9 p-5 bg-slate-800 mb-12 overflow-x-hidden">
        <div className="h-1 w-12 bg-white"></div>
        <span className="text-white font-medium">
          <h1
            ref={headingRef}
            className="text-6xl md:text-[200px] font-bold mb-6"
          >
            Experience
          </h1>
        </span>
      </div>

      {/* Internships / Training */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="mb-6"
      >
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="h-1 w-10 bg-white" />
          <span className="text-white font-medium">
            Internship & Training ...
          </span>
          <div className="h-1 w-10 bg-white" />
        </div>
        <p className="mt-2 text-gray-300">
          Completed a 3-month Web Development internship where I worked on
          building responsive websites using{" "}
          <strong>React, Node.js, and MongoDB</strong>.
        </p>
      </div>

      {/* Projects */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold text-white">Projects</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-300">
          <li>
            <strong>E-commerce App</strong> – Full-stack app with product
            listing, cart, and payment gateway (React, Node.js, MongoDB,
            Stripe).
          </li>
          <li>
            <strong>Portfolio Website</strong> – Personal portfolio built using
            React & Tailwind CSS.
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div
        ref={(el) => el && sectionsRef.current.push(el)}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold text-white">Technical Skills</h2>
        <p className="mt-2 text-gray-300">
          React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, Git/GitHub
        </p>
      </div>

      {/* Academics */}
      <div ref={(el) => el && sectionsRef.current.push(el)}>
        <h2 className="text-xl font-semibold text-white">Academic Experience</h2>
        <p className="mt-2 text-gray-300">
          Worked on multiple academic projects and group assignments involving
          problem-solving, team collaboration, and modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Experience;
