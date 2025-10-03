import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, } from "lucide-react";
import { Button } from "@/components/ui/button";
import tanishportfolio from "../images/tanishportfolio.jpg";
import { GitHub, LinkedIn, Twitter, Email, YouTube } from "@mui/icons-material";
import { Separator } from "@/components/ui/separator";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const HomePage = () => {
  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  function TwitterXIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M18.244 2H21.68l-7.46 8.52L22.49 22h-6.563l-5.15-6.617L4.8 22H1.364l7.96-9.09L1.01 2h6.69l4.65 6.062L18.244 2zm-2.31 18h2.07L8.166 4h-2.2l10.968 16z" />
      </SvgIcon>
    );
  }
  return (




    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-primary font-medium">
                  Full Stack Developer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Tanish Kumar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                A passionate Full-Stack Developer who loves crafting modern, scalable, and user-friendly web applications. I specialize in building end-to-end digital solutions—from intuitive front-end interfaces to powerful back-end systems. With a focus on clean code, performance, and great user experience, I enjoy turning ideas into real-world products that make an impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex space-x-5 mt-8">
                <a
                  href="https://github.com/Tanishhkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GitHub fontSize="small" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanish-kumar-9a8324311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedIn fontSize="small" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/Tanish_kumar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterXIcon fontSize="small" />
                  <span className="sr-only">Twitter (X)</span>
                </a>
                <a
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <YouTube fontSize="small" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="mailto:tanishkumarp436@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Email fontSize="small" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
                <img
                  src={tanishportfolio}
                  alt="Tanish Kumar"
                  className="rounded-full object-cover w-full h-full border-4 border-background shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-4 shadow-lg">
                  <div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-lg">
                    2+ yrs
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the technologies I've been working with recently
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
          >
            {[
              "React",
              "Node.js",
              "TypeScript",
              "MongoDB",
              "Next.js",
              "Tailwind CSS",
              "MySql",
              "Gsap",
              "Docker",
              "AWS",
              "Firebase",
              "Redux",
            ].map((tech, index) => (
              <div
                key={tech}
                className="p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow w-full flex flex-col items-center justify-center text-center"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg mb-3 flex items-center justify-center">
                  {tech.charAt(0)}
                </div>
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce platform with payment processing and inventory management",
                image:
                  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=600&h=400",
                tech: ["Next.js", "MongoDB", "Stripe"],
              },
              {
                title: "Property Management App",
                description:
                  "A property management application for landlords and tenants",
                image:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400",
                tech: ["React", "Node.js", "PostgreSQL"],
              },
              {
                title: "Health & Fitness Tracker",
                description:
                  "A mobile-first application to track workouts and nutrition",
                image:
                  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=600&h=400",
                tech: ["React Native", "Firebase", "Redux"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="p-0" asChild>
                      <Link to={`/projects/${index}`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm currently available for freelance work and exciting
              opportunities.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Let's Work Together</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
