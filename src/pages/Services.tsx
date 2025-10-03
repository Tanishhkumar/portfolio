import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Responsive, scalable, and SEO-friendly websites built with modern frameworks like React, Next.js, and Tailwind CSS.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Cross-platform apps for iOS and Android with React Native and Flutter for seamless user experiences.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive, and user-friendly interfaces crafted with attention to detail.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Secure and efficient integration of RESTful APIs, GraphQL, and third-party services.",
    icon: "🔗",
  },
  {
    id: 5,
    title: "Backend Development",
    description:
      "Boost your brand with SEO, social media marketing, and data-driven digital strategies.",
    icon: "📈",
  },
  {
    id: 6,
    title: "Other Web Services",
    description:
      "Boost your brand with SEO, social media marketing, and data-driven digital strategies.",
    icon: "📈",
  },
];

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    tech: "React, Node.js, MongoDB",
    description:
      "Full-stack online store with payment integration and admin dashboard.",
  },
  {
    id: 2,
    name: "Portfolio Website",
    tech: "Next.js, TailwindCSS",
    description:
      "Personal portfolio with animations and responsive design.",
  },
  {
    id: 3,
    name: "Weather App",
    tech: "React, OpenWeather API",
    description: "Real-time weather forecast with location search.",
  },
];

const Services: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const serviceRefs = useRef<HTMLDivElement[]>([]);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    // Animate header
    tl.to(headerRef.current, {
      y:  30,
      opacity: 1,
      delay:1,
      duration:2,
      scrub:true,
      ease: "power4.in",
      
      
      
    });

    // Animate services one by one
    tl.from(serviceRefs.current, {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 3,
      delay:2,
      rotation: 720,
      ease: "power4.out",
      repeat: -1,
      yoyo: true, 
      
      
    });

    // Animate projects
    tl.to(projectRefs.current, {
      opacity: 1,
      scale: 0.9,
      stagger: 0.2,
      delay: 1,
      duration: 3,
      rotation:360,
       repeat: 1,
      yoyo: true,
      ease: "back.out(1.7)",
      
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-800 p-8">
      {/* Header */}
      <h1 ref={headerRef} className="text-4xl font-bold mb-10 text-center bg-orange-500 text-white">
        My Services & Projects
      </h1>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-5  text-center text-white">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) serviceRefs.current[i] = el;
              }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-gray-300 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white bg-orange-500">
          Projects Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current[i] = el;
              }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2 text-black">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
