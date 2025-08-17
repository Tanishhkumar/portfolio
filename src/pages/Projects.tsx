import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  demoLink: string;
  githubLink: string;
  featured: boolean;
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment processing, inventory management, and admin dashboard. Supports multiple payment methods and features a responsive design.",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Web App", "Full Stack"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      demoLink: "https://example.com/demo1",
      githubLink: "https://github.com/example/project1",
      featured: true
    },
    {
      id: "property-management",
      title: "Property Management System",
      description: "A comprehensive property management platform that helps landlords manage properties, tenants, and maintenance requests. Includes a tenant portal for easy communication.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Web App", "Full Stack"],
      technologies: ["React", "TypeScript", "PostgreSQL", "Node.js", "AWS"],
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/example/project2",
      featured: true
    },
    {
      id: "fitness-tracker",
      title: "Health & Fitness Tracker",
      description: "A mobile-first application for tracking workouts, nutrition, and health metrics. Features custom workout plans, progress tracking, and social sharing.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Mobile App", "Frontend"],
      technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
      demoLink: "https://example.com/demo3",
      githubLink: "https://github.com/example/project3",
      featured: true
    },
    {
      id: "task-management",
      title: "Task Management Dashboard",
      description: "A productivity tool for managing tasks, projects, and team collaboration. Features drag-and-drop interfaces, real-time updates, and customizable workflows.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Web App", "Frontend"],
      technologies: ["React", "TypeScript", "Socket.io", "Tailwind CSS"],
      demoLink: "https://example.com/demo4",
      githubLink: "https://github.com/example/project4",
      featured: false
    },
    {
      id: "weather-app",
      title: "Weather Forecast App",
      description: "A sleek weather application providing real-time forecasts, radar maps, and weather alerts. Features location-based forecasts and customizable widgets.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Web App", "Frontend"],
      technologies: ["React", "OpenWeather API", "ChartJS", "PWA"],
      demoLink: "https://example.com/demo5",
      githubLink: "https://github.com/example/project5",
      featured: false
    },
    {
      id: "restaurant-booking",
      title: "Restaurant Booking System",
      description: "An online reservation platform for restaurants, featuring table management, custom reservation policies, and customer management tools.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=500",
      category: ["Web App", "Full Stack"],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Twilio API"],
      demoLink: "https://example.com/demo6",
      githubLink: "https://github.com/example/project6",
      featured: false
    },
  ];

  const categories = ["all", "Web App", "Mobile App", "Frontend", "Full Stack"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-10 bg-primary" />
            <span className="text-primary font-medium">My Work</span>
            <div className="h-1 w-10 bg-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recent Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of my recent work that showcases my skills and experience in building web and mobile applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="rounded-full"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="bg-background/80 rounded-full"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <CardContent className="flex-grow flex flex-col p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.category.map(cat => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-1 bg-muted rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="p-0" asChild>
                      <a href={`/projects/${project.id}`}>
                        View Project Details <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 bg-muted rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects and creative ideas. Let's build something great together!
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
