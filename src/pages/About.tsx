import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Download,
  Award,
  Book,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import tanishportfolio from "../images/tanishportfolio.jpg"
const AboutPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="mb-20">
  {/* Image Section Full Screen */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full h-screen flex items-center justify-center"
  >
    <img
      src={tanishportfolio}
      alt="Portrait of Tanish Kumar, Full-Stack Developer"
      className="rounded-xl shadow-lg max-w-4xl w-full h-auto object-cover"
    />
  </motion.div>

  {/* Text Section Below */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="max-w-4xl mx-auto mt-12 px-6 text-center"
  >
    <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="h-1 w-12 bg-primary" />
      <span className="text-primary font-medium">About Me</span>
    </div>
    <h1 className="text-4xl font-bold mb-6">
      I'm <span className="text-primary">Tanish Kumar</span>, a Full-Stack Developer
    </h1>
    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
      I'm a passionate full-stack developer building web applications 
      using modern technologies. I specialize
      in creating responsive, user-friendly interfaces with React and
      building robust backend systems.
    </p>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      My journey in tech began at the University of Technology where I
      earned my Bachelor's in Computer Science. I've since worked with
      startups and established companies alike, helping build products
      that solve real problems.
    </p>
    <p className="text-muted-foreground mb-8 leading-relaxed">
      When I'm not coding, you can find me hiking, reading about new
      technologies, or contributing to open-source projects. I'm always
      eager to learn new skills and take on challenging projects.
    </p>
    <div className="flex justify-center flex-wrap gap-4">
      <Button asChild>
        <Link to="/contact">
          Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <a href="/Tanish_Kumar_CV.pdf" download>
          <Download className="mr-2 h-4 w-4" /> Download CV
        </a>
      </Button>
    </div>
  </motion.div>
        </section>


        {/* Experience & Education Tabs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="experience" className="text-lg py-3">
                <Briefcase className="mr-2 h-5 w-5" /> Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="text-lg py-3">
                <GraduationCap className="mr-2 h-5 w-5" /> Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {[
                  {
                    role: "Senior Full-Stack Developer",
                    company: "Tech Innovations Inc.",
                    period: "2022 - Present",
                    description:
                      "Lead development of the company's main SaaS product. Implemented new features, improved performance, and mentored junior developers.",
                    techStack: ["React", "Node.js", "MongoDB", "AWS"],
                  },
                  {
                    role: "Full-Stack Developer",
                    company: "Digital Solutions Ltd.",
                    period: "2020 - 2022",
                    description:
                      "Developed and maintained multiple client websites and web applications. Worked on both frontend and backend implementations.",
                    techStack: ["React", "Express.js", "PostgreSQL", "Docker"],
                  },
                  {
                    role: "Frontend Developer",
                    company: "Creative Web Agency",
                    period: "2018 - 2020",
                    description:
                      "Created responsive and interactive user interfaces for client websites. Collaborated with designers to implement pixel-perfect designs.",
                    techStack: ["React", "JavaScript", "SCSS", "Redux"],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 border-l-2 border-primary/30 pl-6 py-2"
                  >
                    <div className="absolute -ml-[29px] h-5 w-5 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-primary font-medium mb-3">
                        {item.company}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="education">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {[
                  {
                    degree: "Master of Science in Computer Science",
                    institution: "Tech University",
                    period: "2016 - 2018",
                    description:
                      "Specialized in Software Engineering and Data Systems. Completed thesis on optimizing database queries for large-scale applications.",
                    achievements: [
                      "GPA: 3.9/4.0",
                      "Dean's List",
                      "Research Assistant",
                    ],
                  },
                  {
                    degree: "Bachelor of Science in Computer Science",
                    institution: "University of Technology",
                    period: "2012 - 2016",
                    description:
                      "Focused on software development fundamentals, algorithms, and web technologies. Participated in several hackathons and coding competitions.",
                    achievements: [
                      "Graduated with Honors",
                      "Web Development Club President",
                      "Hackathon Winner",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 border-l-2 border-primary/30 pl-6 py-2"
                  >
                    <div className="absolute -ml-[29px] h-5 w-5 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-primary font-medium mb-3">
                        {item.institution}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Testimonials */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testimonials from clients and colleagues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Williams",
                role: "Project Manager",
                company: "Tech Innovations",
                testimonial:
                  "Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him an invaluable team member.",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                company: "StartUp Solutions",
                testimonial:
                  "Working with Alex was a pleasure. He not only met all our technical requirements but also provided valuable insights that improved our product.",
                avatar:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100",
              },
              {
                name: "Emily Rodriguez",
                role: "Frontend Developer",
                company: "Digital Agency",
                testimonial:
                  "As a colleague, Alex was always willing to help and share his knowledge. His coding standards and approach to architecture have influenced how I work.",
                avatar:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="absolute text-6xl text-primary/20 -top-4 -left-2">
                        "
                      </span>
                      <p className="text-muted-foreground relative z-10 pl-4">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
